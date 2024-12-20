export default function NavButton ( {position=0, type, changeSet} ) {

    const symbols = {
        "toStart": "|<-",
        "toEnd": "->|",
        "toPrevious": "<-",
        "toNext": "->",
        "search": "..."
    }

    const navButtonStyle =`
    h-10 w-10
    flex items-center justify-center
    uppercase
    text-sm text-white font-semibold
    bg-black
    shadow-2xl drop-shadow-xl
    transition-all duration-300 ease-in-out
    active:translate-y-1 active:shadow-lg
    hover:via-red-800 hover:to-orange-500
    `;
    let buttonName = "";
    // Check, what should be set as button text
    // Either a NUMBER (!isNaN)
    // Or a symbol
    if (!isNaN(Number(type))) {
        buttonName = String(position);
    } else {
        buttonName = symbols[type];
    }

    return (
    <button
        className={navButtonStyle}
        name={type}
        value={position}
        onClick={(event) => changeSet(event)}
    >
        {buttonName}
    </button>
    );
}