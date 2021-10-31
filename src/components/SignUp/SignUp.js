import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    user,
    signUpWithEmailPass,
    message2,
    setMessage2,
    success,
    setSuccess,
    checkUser,
  } = useAuth();
  const history = useHistory();

  // Change Title
  useEffect(() => {
    document.title = "E Pharma | Sign Up";
    window.scrollTo(0, 0);
  }, []);

  // Redirect to home after register 
  useEffect(() => {
    if (user.email) history.push("/home");
  }, [user]);

  // handle register function 
  const handleRegistration = (e) => {
    e.preventDefault();
    signUp();
    setMessage2("");
    setSuccess("");
  };

  // sign up function 
  const signUp = () => {
    signUpWithEmailPass(name, email, password);
  };

  // Handle Email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handle Password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handle Name
  const handleName = (e) => {
    setName(e.target.value);
  };
  useEffect(()=> {
    setMessage2('');
  },[])

  return (
    <div className="login-container">
      {!checkUser ? (
        <div className="spinner d-flex align-items-center justify-content-center">
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="ms-2">Loading...</span>
          </button>
        </div>
      ) : (
        <div className="limiter">
          <div className="container-login100 my-2">
            <div className="wrap-login100">
              <form
                className="login100-form validate-form"
                onSubmit={handleRegistration}
              >
                <span className="login100-form-title">Sign Up</span>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Name is reauired"
                >
                  <span className="label-input100">Name</span>
                  <input
                    required
                    onChange={handleName}
                    className="input100"
                    type="text"
                    placeholder="Type your name"
                    id="input-name"
                  />
                 
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Email is required"
                >
                  <span className="label-input100">Email</span>
                  <input
                    required
                    onChange={handleEmail}
                    className="input100"
                    type="email"
                    placeholder="Type your email"
                    id="input-email"
                  />
                 
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <span className="label-input100">Password</span>
                  <input
                    required
                    onChange={handlePassword}
                    className="input100"
                    type="password"
                    name="pass"
                    placeholder="Type your password"
                    id="input-pass"
                  />
                 
                </div>

                <div className="container-login100-form-btn mt-4">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn"></div>
                    <input
                      type="submit"
                      value="Sign Up"
                      className="login100-form-btn"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-danger label-input100 text-center mt-3">
                    {message2}
                  </p>
                  <p className="text-success label-input100 text-center mt-3">
                    {success}
                  </p>
                </div>
              </form>

              <div className="text-center pt-2">
                <span className="txt1 p-b-17">Already have an account? </span>
                <NavLink to="/login" className="txt2">
                  Log In
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
