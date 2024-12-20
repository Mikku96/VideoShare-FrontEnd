// Consists of NavButtons

import NavButton from "./NavButton";

// Amount of number buttons shown depends on the "page" we are currently in

// Max of 5 numbered are shown, i.e. 3 4 5 6 7 (if on 5 page)

// In addition, buttons to go to page 1 and last page

// Lastly, buttons to move to surrounding pages

// Examples:

// On page 1: 1 2 3 4 5 -> ->|

// page 2: |<- <- 1 2 3 4 5 -> ->|

// page 4: |<- <- 2 3 4 5 6 -> ->|

// page 4, max at 5: |<- <- 1 2 3 4 5 -> ->|

// Quite complicated actually!

export default function NavBar( {videosPerPage, amountOfVideos, currentPage, setCurrentPage} ) {

    // How many pages needed? Amount / how many per page... + 1 if not divisible!
    const neededPages = amountOfVideos % videosPerPage === 0 ? 
    Math.floor(amountOfVideos / videosPerPage) : 
    Math.floor(amountOfVideos / videosPerPage) + 1;

    // NOT NICE! Think about a cleaner solution...
    function changeSet(event) {
        if (!isNaN(Number(event.target.name))) {
            setCurrentPage(event.target.value)
        } else if (event.target.name === "toStart") {
            setCurrentPage(1);
        } else if (event.target.name === "toEnd") {
            setCurrentPage(neededPages);
        } else if (event.target.name === "toNext") {
            setCurrentPage(currentPage + 1);
        } else if (event.target.name === "toPrevious") {
            setCurrentPage(currentPage - 1);
        } else {
            const newPage = prompt("Please enter a page number", 1);
            // If user inputs anything but a number between 1 - max..
            // Deal with the input!
            if (isNaN(Number(newPage)) || Number(newPage) <= 0) {
                setCurrentPage(1);
            } else if(Number(newPage) > neededPages) {
                setCurrentPage(neededPages);
            } else {setCurrentPage(newPage)}
        }
    }
    let pages = [];
    for (let i = 1; i <= neededPages; i++) {
        if (neededPages <= 5) {
            pages.push(<NavButton 
                type={i}
                position={i}
                changeSet={changeSet} 
                />)
        } else {
            if ((i >= Number(currentPage) - 2 && i <= Number(currentPage) + 2)) {
                pages.push(<NavButton 
                    type={i}
                    position={i}
                    changeSet={changeSet} 
                    />)
            }
        } 
    }

    return (
        <div className="flex flex-row flex-wrap justify-center gap-x-5">
            {Number(currentPage) !== 1 &&
            <>
                <NavButton 
                type={"toStart"}
                changeSet={changeSet}
                />
                <NavButton
                type={"toPrevious"}
                changeSet={changeSet}
                />
                <NavButton
                type={"search"}
                changeSet={changeSet}/>
            </>           
            }

            {pages}

            {Number(currentPage) !== neededPages &&
            <>
                <NavButton
                type={"search"}
                changeSet={changeSet}/>
                <NavButton
                type={"toNext"}
                changeSet={changeSet}
                />
                <NavButton 
                type={"toEnd"}
                changeSet={changeSet}
                />
            </>           
            }

        </div>
    );
}