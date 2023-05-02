import React, { useCallback, useEffect, useState } from "react";
import Button from "../Button/Button";

const Header = () => {
  let [count, setCount] = useState(0);
  // let [name, setName] = useState("A");

  let countHandler = useCallback((Num) => {
    setCount((count)=>count + Num);
  },[setCount]);

  useEffect(() => {
    console.log("effect-1");
    // document.title = name;
  });
  useEffect(() => {
    console.log("effect-2");
    document.title = `clcked ${count}`;
  });

  console.log("Header..................");
  return (
    <div>
      <h1 className="text-7xl text-red-600 text-center mt-8">UseEffect..&&..useCallback</h1>
      <h1 className="text-7xl  text-center mt-8">Count: {count} </h1>
      {/* <h1 className="text-3xl  text-center mt-8">Name: {name} </h1> */}
      <div className=" mt-10 text-center">
        <Button value="+1" Handler={countHandler} num={1} />
        <Button value="+5" Handler={countHandler} num={5} />
        <Button value="+10" Handler={countHandler} num={10} />
        <Button value="+15" Handler={countHandler} num={15} />
        <Button value="+20" Handler={countHandler} num={20} />
        <Button value="+25" Handler={countHandler} num={25} />
        <Button value="+50" Handler={countHandler} num={50} />
        <Button value="+100" Handler={countHandler} num={100} />
        {/* <Button value="changeName" Handler={nameHandler} /> */}
      </div>
    </div>
  );
};

export default Header;
