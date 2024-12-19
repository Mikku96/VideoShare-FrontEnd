import StatusCircle from "./StatusCircle.jsx";

export default function DataState ( {state}) {
    
    return (
    <div className="flex flex-row gap-x-1 align-middle">
        <StatusCircle 
        singleState = {state[0]}/>
        <StatusCircle 
        singleState = {state[1]}/>
        <StatusCircle 
        singleState = {state[2]}/>
    </div>
    );
}