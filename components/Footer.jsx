const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "row",
        paddingTop: "4px",
        paddingBottom: "0px",
        margin: "0px",
        verticalAlign: "middle",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <p style={{ margin: "0px", height: "25px" }}>© 2024, Martí Climent</p>
      <p style={{ flex: "1" }}></p>
      <button style={{ height: "30px", padding: "0px 20px" }}>
        Privacy and cookie policy
      </button>
      <div style={{ width: "4px" }}></div>
      <button style={{ height: "30px", padding: "0px 20px" }}>
        Contact me
      </button>
    </footer>
  );
};

export default Footer;
