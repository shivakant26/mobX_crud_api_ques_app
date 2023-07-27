import React, { useEffect } from "react";
export const Swal = ({ data, show, setShowModel }) => {
  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  useEffect(()=>{
    on()
  },[])
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  return (
    <>
    <div className="pop_container" id="overlay">
      <div className={show ? 'popup open' : 'close'}>
        <div className="popup_content">
          <span className="icon_round">{data.icon}</span>
          <span>
            <h4>{data.title}</h4>
          </span>
          <span>{data.description}</span>
          <span>
            <button onClick={() => {setShowModel(false);off()}}>Ok</button>   
          </span>
        </div>
      </div>
    </div>
    </>
  );
};
