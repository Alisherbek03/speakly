import React from "react";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="modal-contens">
      <div className="modal">
        <h2 style={{ color: "gray" }}>Sign up</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input
            style={{ marginBottom: "15px" }}
            type="password"
            id="password"
            name="password"
            required
          />

          <button type="submit"> Create account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
