// Consist of:
// Image
// Video Length (inside Image)
// Title
// Progress (three spheres)
//Views and likes

// May need to divide into separate components...

import DataState from "./DataState.jsx";

export default function Thumbnail ({videoInfo, setChosenVideo}) {

    function clickHandler() {
        setChosenVideo(videoInfo);
    }

    return (
        <li className="flex flex-col w-2/12" key={videoInfo.id}>
            <div className="relative text-center text-white">
                <img className="hover:cursor-pointer" src={videoInfo.thumbnail}
                onClick={() => clickHandler()} />
                <p className="text-white bg-black bg-opacity-30 p-0.5  rounded-lg absolute bottom-0.5 right-1">{videoInfo.videoLength}</p>
            </div>

            <div className="flex flex-row flex-wrap justify-between">
                {(videoInfo.definedName.length >= 3) ?
                    <p className="text-white">{videoInfo.definedName}</p>
                    :
                    <p className="text-white">{videoInfo.originalName}</p>
                }
                <DataState 
                videoInfo = {videoInfo}
                />
            </div>
        </li>
        );
}