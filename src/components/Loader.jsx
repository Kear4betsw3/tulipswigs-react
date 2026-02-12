export default function Loader() {
    return (
      <div style={wrap}>
        <div style={spinner}></div>
        <p style={{opacity:.7}}>Loading wigs...</p>
      </div>
    );
  }
  
  const wrap = {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    padding:"60px",
    gap:"16px"
  };
  
  const spinner = {
    width:"42px",
    height:"42px",
    border:"4px solid #333",
    borderTop:"4px solid #e91e63",
    borderRadius:"50%",
    animation:"spin 1s linear infinite"
  };
  