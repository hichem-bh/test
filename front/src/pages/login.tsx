import { useState } from "react";
import auth, { LoginInterface } from "../actions/auth";
import user from "../actions/user";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [error, setError] = useState(false);
  const [addButton, setAddButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response: any = await auth.login({ email, password });
    if (response.status === 403) {
      setError(true);
      setErrorMessage("Invalid email or password");
      setAddButton(true);
    }
  };
  const handleSubmitRegister = async (e: any) => {
    e.preventDefault();
    const response: any = await user.createUser({ email, password });
    console.log(response);
    if (response.status === 403) {
      setError(true);
      setErrorMessage("");
      setAddButton(true);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{errorMessage}</p>}
      {addButton && (
        <>
          <h1>Add new user</h1>
          <form onSubmit={handleSubmitRegister}>
            <label>
              <p>Username</p>
              <input
                type="text"
                onChange={(e) => setEmailRegister(e.target.value)}
              />
            </label>
            <label>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => {
                  setPasswordRegister(e.target.value);
                }}
              />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
