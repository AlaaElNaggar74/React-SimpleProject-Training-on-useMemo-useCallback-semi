import React, { useState } from "react";

let counteries = [
  { name: "egypt", value: "eg", cities: ["atfih", "eltelet"] },
  { name: "itali", value: "os", cities: ["POIUUYY", "QWEERR"] },
  { name: "span", value: "xd", cities: [" 12333", "456778"] },
];

const Test = () => {
  let [city, setCity] = useState(0);
  return (
    <div className="flex justify-center">
      <select
        className="text-3xl text-center mt-8 me-2 "
        onChange={(e) => setCity(e.target.value ? e.target.value : "egypt")}
      >
        {counteries.map((item,ind) => (
          <option>{item.name}</option>
        ))}
      </select>
      <select className="text-3xl text-center mt-8  ">
        {<option>{}</option>}
      </select>
    </div>
  );
};

export default Test;
