import React from "react";
import scss from "./App.module.scss";
import JSONDATA from "./components/MOCK_DATA.json";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <input
      className={scss.input}
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
        return null;
      }).map((val, key) => {
        return (
          <div className={scss.container} key={key}>
            <p>{val.first_name}</p>
            <p>{val.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
