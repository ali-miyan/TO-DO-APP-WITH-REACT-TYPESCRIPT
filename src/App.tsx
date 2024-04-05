import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./App.css";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { ListItems } from "./components/listItems";
import { Items } from "./components/types/list";

function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [inputVal, setInputVal] = useState<string>("");

  const [btn,btnStat] = useState<string>('')

  const submitFun = (event: React.FormEvent) => {
    event.preventDefault();
    setItems((val) => [...val, { data: inputVal, id: Date.now().toString() }]);
    setInputVal("");
  };


  const onchange = (val:string) => {
    btnStat(val)
  }

  return (
    <>
    <p>{btn}</p>
    <input type="text"  onChange={(e)=>onchange(e.target.value)}/>
      <button  >button</button>
      <h1 className="text-3xl font-bold flex mb-8 justify-center">TO-DO</h1>
      <div className="flex w-full items-center justify-center">
        <form className="" onSubmit={submitFun}>
          <Input type="text" inputVal={inputVal} setInputVal={setInputVal} />
          <Button
            type={"submit"}
            title={<FaPlus />}
            className={
              "px-3 py-3 ml-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none"
            }
          />
          <ListItems items={items} setItems={setItems} />
        </form>
      </div>
    </>
  );
}

export default App;
