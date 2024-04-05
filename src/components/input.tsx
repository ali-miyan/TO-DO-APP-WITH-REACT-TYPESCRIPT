import React from "react";

type Input = {
  inputVal: string;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
  type: "text";
};

export const Input = ({ type, inputVal, setInputVal }: Input) => {
  return (
    <>
      <input
        value={inputVal}
        onChange={(event) => setInputVal(event.target.value)}
        type={type}
        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />  
    </>
  );
};
