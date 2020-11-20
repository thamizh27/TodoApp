import { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleClick = () => {
    setList([...list, { items: item, key: Date.now() }]);
    //console.log(list);
    setItem("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="first-div">
            <div className="input-wrapper">
              <input
                onChange={handleChange}
                value={item}
                placeholder="Add Items..."
                autoFocus
              />
              <button onClick={handleClick}>+</button>
            </div>
          </div>

          <List itemList={list} setList={setList} />
        </div>
      </header>
    </div>
  );
}

export default App;
