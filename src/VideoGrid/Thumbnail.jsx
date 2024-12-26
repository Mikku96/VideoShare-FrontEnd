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
            <img className="hover:cursor-pointer" src={videoInfo.thumbnail}
            onClick={() => clickHandler()} />
            <div className="flex flex-row flex-wrap justify-between">
                <p className="text-white">{videoInfo.name}</p>
                <DataState 
                state = {videoInfo.state}
                />
            </div>
        </li>
        );
}