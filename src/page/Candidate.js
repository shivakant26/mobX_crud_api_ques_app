import { useEffect, useState } from "react";
import Instruction from "../component/Instruction";
import { observer } from "mobx-react";
import authStore from "../store/AuthStore";
import Timer from "../component/Timer";

const Candidate = observer(() => {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [examScreen, setExamScreen] = useState(false);
  const [singleData, setSingleData] = useState(0);
  const [currentValue, setCurrentValue] = useState();
  const [answerData, answeredData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleInputChange = (event) => {
    setButtonEnabled(event.target.checked);
    const questionId = singleQuestion[singleData]?.question_id;
    if (event.target.checked && questionId) {
      const updatedAnswerData = answerData.find(
        (item) => item.question_id === questionId
      );
      if (!updatedAnswerData) {
        answerData.push({ question_id: questionId, currentValue });
        answeredData([...new Set(answerData)]);
      }
    }
  };

  const save = () => {
    setExamScreen(true);
  };

  useEffect(() => {
    authStore.fetchAllPaper();
  }, []);

  const allquestion = JSON.parse(JSON.stringify(authStore?.getPaper));
  const singleQuestion = allquestion[0]?.questions;

  const optiondata = singleQuestion?.[singleData]?.option?.map((val) => ({
    ...val,
    checked: currentValue === val.ans,
  }));

  useEffect(() => {
    setCurrentValue(
      selectedAnswers[singleQuestion?.[singleData]?.question_id] || ""
    );
  }, [singleData, selectedAnswers]);

  const next = (question_id) => {
    let object = { question_id, currentValue };
    if (singleData < singleQuestion?.length) {
      setSelectedAnswers((prevSelectedAnswers) => ({
        ...prevSelectedAnswers,
        [question_id]: currentValue,
      }));
      setSingleData(singleData + 1);
      answerData.push(object);
      let uniqueChars = [...new Set(answerData)];
      answeredData(uniqueChars);
    } else {
      return false;
    }
  };

  const previous = () => {
    if (singleData < 1) {
      return false;
    } else {
      setSelectedAnswers((prevSelectedAnswers) => ({
        ...prevSelectedAnswers,
        [singleQuestion[singleData]?.question_id]: currentValue,
      }));
      setSingleData(singleData - 1);
    }
  };

  const handleChange = (e) => {
    setCurrentValue(e.target.value);
  };

  const handleEdit = (id) => {
    setSingleData(id - 1);
  };

  return (
    <>
      {examScreen ? (
        <>
          <div className="exam_screen_section">
            <div className="question_part_group">
              <div className="ques_part">
                <div className="question">
                  <strong>
                    Question {singleQuestion[singleData]?.question_id} :{" "}
                  </strong>
                  <span>{singleQuestion[singleData]?.question}</span>
                </div>
                <div className="answers">
                  {optiondata?.map((opt, index) => {
                    return (
                      <div className="ans_radio_field" key={index}>
                        <input
                          type="radio"
                          name="ans"
                          value={opt.ans}
                          onChange={(e) => handleChange(e)}
                          checked={currentValue === opt.ans}
                        />
                        <span>{opt.ans}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="button_group">
                  <button className="prev_btn" onClick={previous}>
                    Prev
                  </button>

                  <button
                    className="next_btn"
                    onClick={() =>
                      next(singleQuestion[singleData]?.question_id)
                    }
                  >
                    Next
                  </button>

                  <button className="next_btn">Submit</button>
                </div>
              </div>
              <div className="ques_util_part">
                <div className="exam_timer"><Timer /></div>
                <div className="attemped_question">
                  <ul>
                    {allquestion[0]?.questions?.map((ques, index) => {
                      const attempted = answerData.some(
                        (item) => item.question_id === ques.question_id
                      );
                      return (
                        <li
                          key={index}
                          className={attempted ? "succuss" : ""}
                          onClick={() => handleEdit(ques.question_id)}
                        >
                          <span>
                            {ques.question_id.toString().padStart(2, "0")}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Instruction
            buttonEnabled={buttonEnabled}
            setButtonEnabled={setButtonEnabled}
            examScreen={examScreen}
            setExamScreen={setExamScreen}
            handleInputChange={handleInputChange}
            next={save}
          />
        </>
      )}
    </>
  );
});

export default Candidate;
