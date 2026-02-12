import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { isEmail, minLength } from "../utils/validators";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !isEmail(email) || !minLength(password, 6)) {
      alert("Check your inputs: valid name, email, and password >= 6 chars required.");
      return;
    }

    alert(`Registered! Name: ${name}, Email: ${email}`);
    // TODO: Connect to authService later
  };

  return (
    <>
      <Navbar />

      <div style={{padding:"40px", maxWidth:"420px", margin:"0 auto"}}>
        <h2>Register</h2>

        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={field}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={field}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={field}
          />

          <button type="submit" style={btn}>Register</button>
        </form>
      </div>

      <Footer />
    </>
  );
}

const field = {
  width:"100%",
  padding:"12px",
  marginBottom:"12px",
  background:"#111",
  color:"#eee",
  border:"1px solid #333",
  borderRadius:"8px"
};

const btn = {
  padding:"12px",
  width:"100%",
  background:"#e91e63",
  border:"none",
  borderRadius:"8px",
  color:"#fff",
  cursor:"pointer"
};
