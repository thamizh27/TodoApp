import React from "react";
import "./App.css";

function List({ itemList, setList }) {
  const handleClick = (key) => {
    const newList = itemList.filter((lists) => {
      return lists.key !== key;
    });

    setList(newList);
  };
  return (
    <div>
      {itemList.map((itemObj) => (
        <div key={itemObj.key} className="items">
          <p>{itemObj.items}</p>
          <button className="btn" onClick={() => handleClick(itemObj.key)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
