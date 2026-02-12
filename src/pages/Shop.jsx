import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

export default function Shop() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id:1, name:"Curly Queen", price:1100, image:"/demo1.jpg" },
        { id:2, name:"Blonde Power", price:1400, image:"/demo2.jpg" },
        {id:3, name:"Brazillian Lace Front", price:1399, image:"/Brazillian-Lace-Front-Wig.webp"}
      ]);
    }, 800);
  }, []);

  return (
    <>
      <Navbar />
      <div style={{padding:"40px"}}>
        <h2>Shop Wigs</h2>

        {!products
          ? <Loader />
          : <div style={grid}>
              {products.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
        }
      </div>
      <Footer />
    </>
  );
}

const grid = {
  display:"flex",
  gap:"20px",
  flexWrap:"wrap"
};
