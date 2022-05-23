import Popup from "./components/Popup";
import { useState } from "react";
import "./components/Popup.css";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      email: event.target.username.value,
      password: event.target.password.value,
    });
  };

  return (
    <div className="App">
      <main>
        <div className="login-page">
          <h1>Login Modal Implementation</h1>
          <button onClick={() => setButtonPopup(true)}>Sign In</button>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <form onSubmit={handleSubmit}>
            <h1 className="login-header">Sign in to your account</h1>
            <label className="labels">Email</label>
            <br></br>
            <input type="email" name="username" className="login-box" />
            <label className="labels">Password</label>
            <input type="password" name="password" className="login-box" />
            <button type="submit" className="login-btn">
              Sign In
            </button>
          </form>
          <div className="additional-btns">
            <p className="align-left">
              Don't have an account?
              <button className="signup-btn">Sign up</button>
            </p>
            <div className="align-right">
              <button className="forgot-btn">Forgot password?</button>
            </div>
          </div>
        </Popup>
      </main>
    </div>
  );
}

export default App;
