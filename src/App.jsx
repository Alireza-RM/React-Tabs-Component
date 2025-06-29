import { useState } from "react";
import DetailsData from "./DetailsData";
import "./App.css";

function App() {
  const [tabs, setTabs] = useState(1);

  const detailsArray = [
    {
      id: 1,
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ab 1. ",
    },
    {
      id: 2,
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ab 2.",
    },
    {
      id: 3,
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ab 3.",
    },
    {
      id: 4,
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ab 4.",
    },
  ];
  const filterData = detailsArray.filter((data) => data.id == tabs);

  return (
    <div className="app">
      <div className="header">
        <h1>Tabs Components with React</h1>
        <span
          className={tabs == 1 ? "active" : ""}
          onClick={(e) => setTabs(e.target.id)}
          id={1}
        >
          tab 1
        </span>
        <span
          className={tabs == 2 ? "active" : ""}
          onClick={(e) => setTabs(e.target.id)}
          id={2}
        >
          tab 2
        </span>
        <span
          className={tabs == 3 ? "active" : ""}
          onClick={(e) => setTabs(e.target.id)}
          id={3}
        >
          tab 3
        </span>
        <span
          className={tabs == 4 ? "active" : ""}
          onClick={(e) => setTabs(e.target.id)}
          id={4}
        >
          tab 4
        </span>
      </div>
      <DetailsData data={filterData[0]} />
    </div>
  );
}

export default App;
