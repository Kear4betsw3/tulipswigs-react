export default function Footer() {
    return (
      <footer style={{
        background:"#111",
        padding:"30px",
        marginTop:"60px",
        textAlign:"center",
        fontSize:"14px",
        color:"#aaa"
      }}>
        © {new Date().getFullYear()} TulipsWigs — All style, no shedding.
      </footer>
    );
  }
  