import React, { useState } from "react";
import { Swal } from "../common/AlertPopup";
import { TiTick } from "react-icons/ti";
const CmpA = () => {
  const [showModel, setShowModel] = useState(false);

  const data = {
    icon: <TiTick />,
    title: "Login",
    description: "Login succussfully",
  };

  const result = () => {
    setShowModel(true);
  };

  return (
    <>
      {showModel && (
        <Swal data={data} show={showModel} setShowModel={setShowModel} />
      )}
      <p>Component A</p>
      <button onClick={result}>Show Popup</button>
    </>
  );
};

export default CmpA;
