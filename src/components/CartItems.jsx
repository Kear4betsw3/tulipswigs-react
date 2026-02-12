export default function CartItem({ item, onQtyChange, onRemove }) {
    return (
      <div style={wrap}>
        <img src={item.image} alt={item.name} style={img} />
  
        <div style={{flex:1}}>
          <h4 style={{margin:"0 0 6px"}}>{item.name}</h4>
          <p style={{opacity:.7, margin:0}}>R {item.price}</p>
  
          <div style={{marginTop:10, display:"flex", gap:10}}>
            <input
              type="number"
              min="1"
              value={item.qty}
              onChange={(e)=>onQtyChange(item.id, Number(e.target.value))}
              style={qty}
            />
  
            <button onClick={()=>onRemove(item.id)} style={removeBtn}>
              Remove
            </button>
          </div>
        </div>
  
        <div style={{fontWeight:"bold"}}>
          R {item.price * item.qty}
        </div>
      </div>
    );
  }
  
  const wrap = {
    display:"flex",
    gap:"16px",
    background:"#181818",
    padding:"14px",
    borderRadius:"12px",
    alignItems:"center"
  };
  
  const img = {
    width:"90px",
    height:"90px",
    objectFit:"cover",
    borderRadius:"10px"
  };
  
  const qty = {
    width:"70px",
    padding:"6px",
    background:"#111",
    color:"#eee",
    border:"1px solid #333",
    borderRadius:"6px"
  };
  
  const removeBtn = {
    background:"#2a2a2a",
    color:"#ff6b6b",
    border:"none",
    padding:"6px 10px",
    borderRadius:"6px",
    cursor:"pointer"
  };
  