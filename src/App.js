import { data } from "./new/data";
import "./App.css";
import { useState } from "react";
import Child from "./new/component";

function App() {
  const deleteCArd = (id)=>{
    const updatedList = allData.filter((ele)=>
       ele.id !== id );
    setAllData(updatedList);
  }
  const [allData, setAllData] = useState(data);
  return (
    <div className="App">
      {allData.map((data) => {
        return <Child data={data} buttonName={"Delete card"} eventHandl={(id)=>{deleteCArd(id)}} />;
      })}
    </div>
  );
}

export default App;
