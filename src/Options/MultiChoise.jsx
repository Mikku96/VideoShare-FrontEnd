export default function MultiChoise ( {chosenOption, setChoise} ) {
    
    function updateOption(event) {
        setChoise({...chosenOption, choise: event.target.value});
    }

    return (
        <div className="flex flex-col">
        <label className="text-white">{chosenOption.title}</label>
        <select
          name={chosenOption.title}
          value={chosenOption.choise}
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