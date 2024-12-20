export default function MultiChoice ( {chosenOption, setChoice} ) {
    
    function updateOption(event) {
        setChoice({...chosenOption, choice: event.target.value});
    }

    return (
        <div className="flex flex-col">
        <label className="text-white">{chosenOption.title}</label>
        <select
          name={chosenOption.title}
          value={chosenOption.choice}
          onChange={(event) => updateOption(event)}
        >
          {chosenOption.options
          .map((option) => (
            <option value={option}>{option}</option>
          ))
          }
        </select>
      </div>
    )
}