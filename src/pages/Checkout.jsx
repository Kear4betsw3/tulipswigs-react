import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Checkout() {
  return (
    <>
      <Navbar />

      <div style={{padding:"40px", maxWidth:"520px"}}>
        <h2>Checkout</h2>

        <input placeholder="Full Name" style={field}/>
        <input placeholder="Address" style={field}/>
        <input placeholder="Phone" style={field}/>

        <button style={btn}>Place Order</button>
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
