import MultiChoise from "./MultiChoise.jsx";

export default function Options ( {howManyShown, setHowManyShown, orderBy, setOrderBy} ) {

    return (
        <div className="flex flex-row flex-wrap justify-evenly">
          <MultiChoise
          chosenOption={howManyShown}
          setChoise={setHowManyShown}
          />
          <MultiChoise 
          chosenOption={orderBy}
          setChoise={setOrderBy}
          />
        </div>
    );
}