import { useEffect, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
// import { Swal } from "./common/AlertPopup";
import { useForm } from "react-hook-form";
import { GrFormClose } from "react-icons/gr";
import { observer } from "mobx-react";
import authStore from "../store/AuthStore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import 'sweetalert2/src/sweetalert2.scss'

const Login = observer(({ role }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const loginResponse = JSON.parse(JSON.stringify(authStore?.loginData));
  const adminResponse = JSON.parse(JSON.stringify(authStore?.adminData));
  console.log("admin",adminResponse.message)

  useEffect(()=>{
    if(loginResponse.message === "Login user succussfully"){
      Swal.fire({
        title: 'success!',
        text: `${loginResponse.message}`,
        icon: 'succuss',
        confirmButtonText: 'okay'
      })
      navigate("/candidate")
    }
  },[loginResponse])

  useEffect(()=>{
    if(adminResponse.message === "Login admin succussfully"){
      Swal.fire({
        title: 'success!',
        text: `${adminResponse.message}`,
        icon: 'succuss',
        confirmButtonText: 'okay'
      })
      navigate("/admin-dashboard")
    }
  },[adminResponse])

  const visiblePassword = () => {
    setShow(!show);
  };

  const onSubmit = (data) => {
    if (role === "admin") {
      authStore.adminLogin(data);
    } else {
      authStore.userLogin(data);
    }
  };

  return (
    <>
      {showModel && (
        <Swal data={data} show={showModel} setShowModel={setShowModel} />
      )}

      <div className="login-page">
        <div className="login-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-field">
              <h2>
                {role === "admin"
                  ? "Admin/Authorised person"
                  : "Candidate login"}
              </h2>
            </div>
            <div className="form-field">
              <input
                type="text"
                placeholder={role === 'admin' ? "User_id" : "Roll no."}
                {...register(role === 'admin' ? "username" : "rollNo", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z0-9]+$/i, // Allow alphanumeric characters
                })}
              />
              {errors?.rollNo?.type === "required" || errors?.username?.type === "required" && (
                <p className="error">required*</p>
              )}
            </div>
            <div className="form-field">
              <input
                type={show ? "text" : "password"}
                placeholder="******"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                })}
              />

              <div className="pass-icons" onClick={visiblePassword}>
                {show ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
              {errors?.password?.type === "required" && (
                <p className="error">required*</p>
              )}
            </div>
            <div className="form-field">
              <button className="login_btn" type="submit">
                login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
});
export default Login;
