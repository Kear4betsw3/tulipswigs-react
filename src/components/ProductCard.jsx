export default function ProductCard({ product }) {
    return (
      <div style={{
        background:"#181818",
        borderRadius:"12px",
        padding:"16px",
        width:"220px"
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{width:"100%", borderRadius:"8px"}}
        />
  
        <h3 style={{margin:"10px 0 4px"}}>{product.name}</h3>
        <p style={{opacity:.7}}>R {product.price}</p>
  
        <button style={btn}>
          Add to Cart
        </button>
      </div>
    );
  }
  
  const btn = {
    width:"100%",
    padding:"10px",
    background:"#e91e63",
    border:"none",
    borderRadius:"8px",
    color:"white",
    cursor:"pointer"
  };
  