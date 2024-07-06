import Image from "next/image";
import "@/styles/header/style.css";
import Link from "next/link";

function Header() {
  return (
    <header id="maindiv_header">
      <div id="mainTitleContainer_header">
        <Image
          style={{ width: "40px", marginRight: "8px" }}
          src={require("@/app/favicon.ico")}
          width={45}
          height={45}
        />
        <span id="mainTitle_header">
          Home
          <span style={{ fontWeight: "400", filter: "opacity(60%)" }}>
            - Suhas Nídgundí
          </span>
        </span>
      </div>
      <div style={{ flexGrow: "1" }}></div>
      <Link className="titlebarBtn_header" href="#aboutme">
        <div className="titlebarContent_header">
          <p className="titlebarParagraph_header">ABOUT ME</p>
        </div>
      </Link>
      <Link className="titlebarBtn_header" href="#projects">
        <div className="titlebarContent_header">
          <p className="titlebarParagraph_header">MY PROJECTS</p>
        </div>
      </Link>
      <Link className="titlebarBtn_header" href="/contactMe">
        <div className="titlebarContent_header">
          <p className="titlebarParagraph_header">CONTACT ME</p>
        </div>
      </Link>
    </header>
  );
}

export default Header;
