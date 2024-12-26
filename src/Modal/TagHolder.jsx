import {useState} from 'react';

export default function TagHolder ( {tags, add} ) {
    
    // Tags to be removed - not functional yet, but as a concept
    const[removeList, setRemoveList] = useState([]);

    function addToRemoveList(event) {

    }
    
    return (
        <div className="border-black border-2 bg-gray-500 opacity-85 p-3 rounded-xl w-3/12">
            <ul className="flex flex-wrap gap-x-1 gap-y-1 text-pretty">
                {tags
                .map((tag) => (
                    <li className="flex border-2 p-1 border-black bg-yellow-600 rounded-xl">
                    <p className="">{tag.replace(/_/g," ")}</p>
                    <input type="button" value="❌" className="hover:cursor-pointer" onClick={(event) => addToRemoveList(event, tag)} />
                    
                    </li>
                ))
                }
            </ul>
        </div>
    );
}