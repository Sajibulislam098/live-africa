import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import "./Login.css";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    user,
    loginWithGoogle,
    loginWithEmailPass,
    message,
    setMessage,
    checkUser,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  // Change Title
  useEffect(() => {
    document.title = "Travel Guru | Log In";
    window.scrollTo(0, 0);
  }, []);

  // Redirects to home or previous location 
  const redirectUrl = location.state?.from?.pathname || "/home";
  useEffect(() => {
    if (user.email) {
      history.push(redirectUrl);
    }
  }, [user]);

  // Login Function
  const login = () => {
    setMessage("");
    loginWithEmailPass(email, password);
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    login();
  };

  // Handle Email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handle Password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handle Google Sign In
  const googleSignInHandle = () => {
    loginWithGoogle();
  };
  useEffect(()=> {
    setMessage('');
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
        <div className="">
          <div className="container-login100 my-2">
            <div className="bg-light">
              <form
                className="login100-form validate-form"
                onSubmit={handleLogin}
              >
                <span className="login100-form-title">Login</span>

                <div className="wrap-input100 validate-input">
                  <span className="label-input100">Email</span>
                  <input
                    required
                    onChange={handleEmail}
                    className="input100"
                    type="email"
                    name="username"
                    placeholder="Type your email  "
                  />
                
                </div>

                <div className="wrap-input100 validate-input">
                  <span className="label-input100">Password</span>
                  <input
                    required
                    onChange={handlePassword}
                    className="input100"
                    type="password"
                    name="pass"
                    placeholder="Type your password"
                  />
                
                </div>

                <div className="container-login100-form-btn mt-4">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn"></div>
                    <input
                      type="submit"
                      value="Log In"
                      className="login100-form-btn"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-danger label-input100 text-center mt-3">
                    {message}
                  </p>
                </div>
              </form>
              <div className="txt1 text-center mt-2">
                <span>Or, Log In Using</span>
              </div>

              <div className="d-flex justify-content-center">
                <div className="d-flex">
                  <button
                    onClick={googleSignInHandle}
                    className="btn btn-warning"
                   
                  >
                   Google Login
                  </button>
                </div>
              </div>

              <div className="text-center pt-3">
                <span className="txt1 p-b-17">Don't have an account? </span>
                <NavLink to="/signUp" className="txt2">
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
