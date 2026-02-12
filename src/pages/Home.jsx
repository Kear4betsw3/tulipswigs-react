import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const demo = [
  { id:1, name:"Royal Lace Front", price:1299, image:"../assets/images/hair.webp" },
  { id:2, name:"latina hair", price:999, image:"/latinahair.jpg" },
  {id:3, name:"Brazillian Lace Front", price:1399, image:"/Brazillian-Lace-Front-Wig.webp"}
];

export default function Home() {
  return (
    <>
      <Navbar />

      <div style={{padding:"40px"}}>
        <h1>Premium Wigs. Zero Nonsense.</h1>

        <div style={grid}>
          {demo.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
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
