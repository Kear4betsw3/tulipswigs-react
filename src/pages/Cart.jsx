import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItems";

export default function Cart() {
  const items = [
    { id:1, name:"Royal Lace", price:1200, qty:1, image:"/demo1.jpg" }
  ];

  return (
    <>
      <Navbar />

      <div style={{padding:"40px"}}>
        <h2>Your Cart</h2>

        <div style={{display:"flex", flexDirection:"column", gap:"16px"}}>
          {items.map(i => (
            <CartItem
              key={i.id}
              item={i}
              onQtyChange={()=>{}}
              onRemove={()=>{}}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
