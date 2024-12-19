import { useState, useEffect } from "react";

import Button from "../Button.jsx";


export default function SearchBar({}) {

    const[searchText, setSearchText] = useState("");

    function submitForm(event) {
        event.preventDefault();
        console.log("Submit");
    }

    return (
        <form className="w-10/12" onSubmit={(event) => submitForm(event)}>
            <div className="mt-2 mb-2 p-1 bg-slate-200 border-2 rounded-xl w-6/12 m-auto border-slate-700 border-solid flex flex-row justify-between">
                <div className="flex flex-row flex-wrap w-10/12">
                    <input type="text"
                     className="flex-grow outline-none bg-transparent text-xl"
                     placeholder="Search"
                     value={searchText}
                     onChange={(event) => setSearchText(event.target.value)}
                    />
                </div>
                <div className="flex flex-row flex-wrap justify-end">
                    <Button
                        buttonName={"Submit"}
                        type={"submit"}
                        tailWindClass = {"text-xl"}
                    />
                </div>
            </div>
        </form>
    );
}
