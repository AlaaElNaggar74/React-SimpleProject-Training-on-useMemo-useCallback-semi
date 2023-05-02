import React, { useRef } from "react";

const Button = ({ Handler, value, num }) => {
  let countRef = useRef(1);

  console.log(
    `${
      countRef.current === 1
        ? "<--[number before arrow -- appear deppend on number of button component in header component ]  "
        : ""
    }${
      countRef.current === 1
        ? "You Visit ButtonComponent Before "
        : "You Visit ButtonComponent Now After "
    }Clicked ${countRef.current++}`
  );

  return (
    <button
      className="text-5xl text-white rounded py-2 px-5 bg-red-600 m-1 "
      onClick={() => {
        Handler(num);
        console.log(`You Clicked Button Number ${num}`);
      }}
    >
      {value}
    </button>
  );
};

export default React.memo(Button);
