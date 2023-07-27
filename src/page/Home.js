import { Link, useNavigate } from "react-router-dom";
import RadioButton from "../component/common/RadioButton";
import { useState } from "react";

const HomePage = (props) => {
  const { role, setRole } = props;
  const navigate = useNavigate("");
  const [disable, setDisabled] = useState(true);

  const handleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole)
    if (selectedRole === "none") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const continew = () => {
    if (role === "admin" || role === "user") {
      navigate("/login");
    }
  };

  return (
    <div className="home-page">
      <div className="page-inner">
        <div className="lf_sd_content">
          <h1>Online Exam</h1>
          <p>
            Online Examination System is a technology-driven way to simplify
            examination activities like defining exam patterns with question
            banks, defining exam timers, objective/ subjective question
            sections, and conducting exams using a computer or mobile devices in
            a paperless manner.
          </p>
          <div className="radio_btn_grp">
            <RadioButton
              type="radio"
              name="auth"
              value="admin"
              data-label="Admin"
              handleChange={(e) => handleChange(e)}
              checked={role === "admin"}
            />
            <RadioButton
              type="radio"
              name="auth"
              value="user"
              data-label="User"
              handleChange={(e) => handleChange(e)}
              checked={role === "user"}
            />
            <RadioButton
              type="radio"
              name="auth"
              value="none"
              data-label="None"
              handleChange={(e) => handleChange(e)}
              checked={role === "none"}
            />
          </div>
          <button
            onClick={continew}
            className={role === "none" || role === "" ? "disabled" : ""}
            disabled={disable}
          >
            Continue
          </button>
        </div>
        <div className="rt_sd_content">
          <img src={require("../assets/images/left-side.jpg")} alt="lef-pci" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
