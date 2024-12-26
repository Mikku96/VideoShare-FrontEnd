import Modal from "react-modal";
import { useState } from "react";

import Button from "../Button.jsx";
import TagHolder from "./TagHolder.jsx";

import ReactPlayer from "react-player/file";

export default function VideoModal({ chosenVideo, showVideo, setShowVideo, setChosenVideo }) {

    Modal.setAppElement("#root");

    // A switch for the button to show full video or preview
    const[fullVideoShow, setFullVideoShow] = useState(false);
    const[switchButtonName, setSwitchButtonName] = useState("Full video");

    function switchShownVideo() {
        setFullVideoShow(!fullVideoShow);
        // Can be simplified BUT I want it to be clear!
        if (!fullVideoShow === true) {
            console.log("Showing full video")
            setSwitchButtonName("Preview");
        } else {
            setSwitchButtonName("Full video");
        }
    }

    function closeModal() {
        setShowVideo(false);
        setFullVideoShow(false);
        setChosenVideo({
            id: 0, 
            thumbnail:"", 
            name: "", 
            stats: {views: 0, likes: 0},
            state: [false, false,false],
            tags: [""],
            previewUrl: ``,
            fullUrl: ``
          });
    }

    const handleDownload = () => {
        fetch(chosenVideo.fullUrl)
          .then((response) => response.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement("a");
            link.href = url;
            link.download = chosenVideo.fullUrl.split("/")[chosenVideo.fullUrl.split("/").length - 1]
            || "downloaded-file";
            document.body.appendChild(link);
    
            link.click();
    
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          })
          .catch((error) => {
            console.error("Error fetching the file:", error);
          });
      };

    return (
        <Modal isOpen={showVideo} scrollable style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)'
            },
            content: {
                position: 'fixed',
                left: "20%",
                right:"20%",
            }
        
        }} id="videoModal" className="bg-gray-700 bg-opacity-90 p-3 mt-60"
        >            
            <Button
            buttonName={"Close"}
            runFunction={() => closeModal()}
            type={"button"}
            tailWindClass="text-white"
            />
            <div className="flex-col">
                <div className="flex justify-between">
                    <h1 className="text-gray-50 text-3xl">{chosenVideo.name}</h1>
                    <Button
                    buttonName={switchButtonName}
                    runFunction={() => switchShownVideo()}
                    type={"button"}
                    tailWindClass="text-white"
                    />
                </div>
                <div className="flex flex-row flex-wrap gap-2">
                    {fullVideoShow ?
                        <ReactPlayer 
                        controls = {true}
                        url={chosenVideo.fullUrl}/>
                        :
                        <ReactPlayer 
                        controls = {true}
                        url={chosenVideo.previewUrl}/>
                    }
                    <TagHolder 
                    tags = {chosenVideo.tags}
                    />
                </div>
                {fullVideoShow &&
                    <div className="bg-black border-2 border-white p-2 text-white flex align-middle justify-center w-1/12 hover:cursor-pointer hover:opacity-50" onClick={handleDownload}>Download</div>            
                }
            </div>

        </Modal>
    );
}
