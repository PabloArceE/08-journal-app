import React from "react";

const LoginScreen = () => {
  return (
    <>
      <h3>Login</h3>

      <form>
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
        <hr/>
        Google
      </form>
    </>
  );
};

export default LoginScreen;
