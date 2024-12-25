import React from "react";
import img from "../Asset/image/developer.png";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();

  const Click = () => {
    navigate("/Dashboard");
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", width: "100%" }}
      >
        <div className="card ">
          <div className="card-body  ">
            <div className="row  " >
              <div className="col-lg-6">
                <img src={img} style={{ height: "200px" }}></img>
              </div>
              <div className="col-lg-6 text-center d-flex justify-content-between align-items-center flex-column">
                <h1>Login</h1>
                <h4>You access our Dashboard</h4>
                <input type="text" placeholder="Enter Username"></input>
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="mt-3"
                ></input>
                <br></br>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => {
                    Click();
                  }}
                >
                  Login
                </button>
                <p>Forget Password ?</p>
                <h2>OR</h2>
                <span>Login With</span>&nbsp;
                
                <h5>Don't have an account ?</h5>
                <h3>Register</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
