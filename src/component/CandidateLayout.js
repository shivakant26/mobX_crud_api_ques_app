import { Outlet } from "react-router-dom";

const CandidateLayout = () => {

  return (
    <>
      <div className="candidate_header">
        <div className="can_header_wr">
            <div className="candidate_left">
                <h5><strong>Candidate Name</strong> : Jhon Doe</h5>
                <p><strong>Shift</strong> : third Shift</p>
            </div>
            <div className="candidate">
                <strong>Examination Name : </strong><span>ssc</span>
            </div>
            <div className="candidate_right">
                <img src={require("../assets/images/download.png")} alt="profile_image"/>
            </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default CandidateLayout;
