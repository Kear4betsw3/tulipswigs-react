import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />
      <div style={{padding:"40px", maxWidth:"420px"}}>
        <h2>Login</h2>
        <input placeholder="Email" style={field}/>
        <input placeholder="Password" type="password" style={field}/>
        <button style={btn}>Login</button>
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
  color:"#fff"
};
