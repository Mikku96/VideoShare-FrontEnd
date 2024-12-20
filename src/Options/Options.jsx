import MultiChoice from "./MultiChoice.jsx";

export default function Options ( {howManyShown, setHowManyShown, orderBy, setOrderBy} ) {

    return (
        <div className="flex flex-row flex-wrap justify-evenly">
          <MultiChoice
          chosenOption={howManyShown}
          setChoice={setHowManyShown}
          />
          <MultiChoice 
          chosenOption={orderBy}
          setChoice={setOrderBy}
          />
        </div>
    );
}