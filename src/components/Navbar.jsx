export default function Navbar() {
    return (
      <nav style={{
        background: "#111",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{margin:0}}>TulipsWigs</h2>
  
        <div style={{display:"flex", gap:"18px"}}>
          <a href="/" style={link}>Home</a>
          <a href="/shop" style={link}>Shop</a>
          <a href="/cart" style={link}>Cart</a>
          <a href="/login" style={link}>Login</a>
        </div>
      </nav>
    );
  }
  
  const link = {
    color: "#eaeaea",
    textDecoration: "none",
    fontSize: "14px"
  };
  