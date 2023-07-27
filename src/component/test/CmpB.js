import { useState } from "react";
import { Swal } from "../common/AlertPopup";
import { TiTick } from "react-icons/ti";

const CmpB = () => {
  const [showModel, setShowModel] = useState(false);
  const data = {
    icon: <TiTick />,
    title: "Register",
    description: "Register succussfully",
  };
  const register = () => {
    setShowModel(true);
  };
  return (
    <>
      {showModel && (
        <Swal data={data} show={showModel} setShowModel={setShowModel} />
      )}
      <p>Component B</p>
      <button onClick={register}>Show Popup B</button>
    </>
  );
};

export default CmpB;
