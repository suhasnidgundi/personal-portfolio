import { portfolio } from "@/portfolioInfo";
import Link from "next/link";

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
      <p style={{ margin: "0px", height: "25px" }}>
        © 2024, {portfolio.personalInfo.name}
      </p>
      <p style={{ flex: "1" }}></p>
      <Link
        style={{
          height: "30px",
          padding: "0px 20px",
          textDecoration: "none",
          color: "white",
          opacity: "50%",
        }}
        href="/privacy"
      >
        Privacy and cookie policy
      </Link>
      <div style={{ width: "4px" }}></div>
      <button style={{ height: "30px", padding: "0px 20px" }}>
        <Link
          href="/contactMe"
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          Contact me
        </Link>
      </button>
    </footer>
  );
};

export default Footer;
