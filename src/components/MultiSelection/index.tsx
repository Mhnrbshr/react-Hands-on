import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState<string>("");
  const [enableMultiSelection, setEnableMultiSelection] =
    useState<boolean>(false);
  const [multiSelection, setMultiSelection] = useState<string[]>([]);

  const handleSingleClick = (id: string) => {
    console.log("handleSingleClick", id);
    setSelected(id === selected ? "" : id);
  };

  const handleMultiSelection = (id: string) => {
    console.log("enableMultiSelection", enableMultiSelection);
    let copyMultiple = [...multiSelection];
    const findIndexOfCurrentID = copyMultiple.indexOf(id);
    console.log("findIndexOfCurrentID", findIndexOfCurrentID);
    if (findIndexOfCurrentID === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(findIndexOfCurrentID, 1); //remnv one item
    }
    setMultiSelection(copyMultiple);
  };
  return (
    <div>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Multi value selection
      </button>
      <div>
        {data && data.length > 0 ? (
          data.map((d) => (
            <div>
              <div
                onClick={() => {
                  console.log("enable", enableMultiSelection);
                  enableMultiSelection
                    ? handleMultiSelection(d.id)
                    : handleSingleClick(d.id);
                }}
              >
                <h3>{d.question}</h3>
                <span>+</span>
              </div>
              {selected === d.id || multiSelection.indexOf(d.id) !== -1 ? (
                <h6>{d.answer}</h6>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data present</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
