import StatusCircle from "./StatusCircle.jsx";

export default function DataState ( {videoInfo}) {
    
    // Preview video existance should be an actual check!
    // IF there is a video... now it checks existance of a path

    // Number of tags required for "true" is 3
    // Number of letters for "name" to be defined is 3

    // e.g. Custom name "AA" would not be enough

    return (
    <div className="flex flex-row gap-x-1 align-middle">
        <StatusCircle 
        singleState = {videoInfo.definedName.length >= 2}/>
        <StatusCircle 
        singleState = {videoInfo.tags.length > 2}/>
        <StatusCircle 
        singleState = {videoInfo.previewVideo.length > 0}/>
    </div>
    );
}