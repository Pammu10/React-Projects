import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentID) {
    setSelected(getCurrentID === selected ? null : getCurrentID);
  }
  function handleMultiSelection(getCurrentID) {
    let cpyMultiple = [...multiple]
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentID)
    if (findIndexOfCurrentId === -1){
        cpyMultiple.push(getCurrentID)
        
    }
    else {
        cpyMultiple.splice(findIndexOfCurrentId, 1)
    } 
    
    setMultiple(cpyMultiple);
   

  }
console.log(selected, multiple);
  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >Enable Multi Selection</button>
      <div className="accordion">
        
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                {
                    enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 &&  <div className="content">{dataItem.answer}</div>
                    : selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                }
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
