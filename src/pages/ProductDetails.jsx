import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProductDetails() {
  const product = {
    name:"Luxury Body Wave",
    price:1500,
    image:"/demo1.jpg",
    desc:"Soft, dense, dramatic."
  };

  return (
    <>
      <Navbar />

      <div style={{padding:"40px", display:"flex", gap:"30px"}}>
        <img src={product.image} style={{width:"320px", borderRadius:"12px"}} />

        <div>
          <h2>{product.name}</h2>
          <h3>R {product.price}</h3>
          <p>{product.desc}</p>
          <button style={btn}>Add to Cart</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

const btn = {
  padding:"12px 18px",
  background:"#e91e63",
  border:"none",
  borderRadius:"8px",
  color:"#fff"
};
