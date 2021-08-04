import React from "react";

const Checkbox = ({ onClick, defaultChecked }) => (
  <input type="checkbox" className="checkbox" onClick={onClick} defaultChecked={defaultChecked} />
);


export default Checkbox;