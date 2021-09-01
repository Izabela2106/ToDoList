import React from "react";

const Checkbox = ({ onChange, checked }) => (
  <input type="checkbox" className="checkbox" onChange={onChange} checked={checked} />
);


export default Checkbox;
