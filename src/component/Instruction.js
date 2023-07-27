import React from "react";
const Instruction = ({
  buttonEnabled,
  handleInputChange,
  next,
}) => {
  return (
    <div className="candidate_exam">
      <div className="center_wr">
        <h4>Instruction</h4>
        <p>Please read the instructions below carefully</p>
        <div className="instruction_list">
          <ul>
            <li>1. Read all the questions carefully before answering</li>
            <li>2. Each question will be one mark</li>
            <li>3. No negative marking for wrong questions</li>
            <li>4. For correct answer you tick on radio button</li>
            <li>
              5. Please confirm before submitting your exam you attempted all
              question
            </li>
          </ul>
        </div>
        <div className="confirm_box">
          <input
            type="checkbox"
            onChange={(e) => handleInputChange(e)}
            checked={buttonEnabled}
          />
          <span>I have read all instruction carefully</span>
        </div>
        <button
          className={buttonEnabled ? "ins_next_btn" : "ins_next_btn disabled"}
          disabled={!buttonEnabled}
          onClick={next}
        >
          start exam
        </button>
      </div>
    </div>
  );
};

export default Instruction;
