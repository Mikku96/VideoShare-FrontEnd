export default function Button({
    tailWindClass = "",
    buttonName,
    runFunction,
    type,
    submitValue = "Submit",
    isDisabled = false,
  }) {
    
    // Stock Tailwind styling + Prop
    const buttonStyling = `
        rounded-full
        px-5 h-10
        flex items-center justify-center

        uppercase
        text-sm text-black font-semibold
        
        bg-gradient-to-r from-orange-700 via-amber-500 to-yellow-200
        shadow-2xl drop-shadow-xl

        transition-all duration-300 ease-in-out
        active:translate-y-1 active:shadow-lg
        hover:via-red-800 hover:to-orange-500
        ${tailWindClass}
    `;
  
    return (
        <>
            {type === "button" && (
                <button
                    className={buttonStyling}
                    onClick={runFunction}
                    disabled={isDisabled}
                >
                    {buttonName}
                </button>
            )}
            {type === "submit" &&
                <input
                    className={buttonStyling + ""}
                    type="submit"
                    value={submitValue}
                    disabled={isDisabled}
                />
            }
        </>
    );
}
  