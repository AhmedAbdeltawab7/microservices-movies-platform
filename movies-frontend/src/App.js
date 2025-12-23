
import { useState } from "react";
import { signup, login } from "./api/auth";

function App() {
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    try {
      const res = await signup(signupForm);
      alert("Signup Success: " + JSON.stringify(res.data));
    } catch (err) {
      alert("Signup Error: " + (err.response?.data?.message || err.message));
    }
  };

  const handleLogin = async () => {
    try {
      const res = await login(loginForm);
      const token = res.data.access_token;
      localStorage.setItem("token", token);
      alert("Login Success ✅ Token saved");
    } catch (err) {
      alert("Login Error: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Movies Frontend (via API Gateway)</h1>

      <h2>Signup</h2>
      <input
        placeholder="Name"
        value={signupForm.name}
        onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
      />
      <br />
      <input
        placeholder="Email"
        value={signupForm.email}
        onChange={(e) =>
          setSignupForm({ ...signupForm, email: e.target.value })
        }
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={signupForm.password}
        onChange={(e) =>
          setSignupForm({ ...signupForm, password: e.target.value })
        }
      />
      <br />
      <button onClick={handleSignup}>Signup</button>

      <hr style={{ margin: "20px 0" }} />

      <h2>Login</h2>
      <input
        placeholder="Email"
        value={loginForm.email}
        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={loginForm.password}
        onChange={(e) =>
          setLoginForm({ ...loginForm, password: e.target.value })
        }
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
