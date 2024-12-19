export default function StatusCircle ( {singleState} ) {
    
    return (
        <>
            {singleState ? 
                <div className="border-black border-2 rounded-full h-5 w-5 bg-green-400">
                </div>
            :
                <div className="border-black border-2 rounded-full h-5 w-5 bg-red-500">
                </div>
            }
        </>
    );
}