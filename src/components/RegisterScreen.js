import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>

      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmation"
          className="auth__input"
          autoComplete="off"
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>
        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
