import Image from "next/image";
import "@/styles/header/style.css";
import Link from "next/link";
import { headerConfig } from "@/portfolioInfo";
import dynamic from "next/dynamic";

dynamic(() => import(require("@/libs/header/script")), {
  loading: () => <p>Loading...</p>,
});

function Header({ config = headerConfig }) {
  return (
    <header id="maindiv_header">
      <div id="mainTitleContainer_header">
        {config.logo && (
          <Image
            style={{ width: `${config?.logo?.width}px`, marginRight: "8px" }}
            src={config.logo.src}
            width={config.logo.width}
            height={config.logo.height}
            alt={config.logo.alt}
          />
        )}
        <span id="mainTitle_header">
          <span style={config.title.style} href={config.title.href}>
            {config.title.text}
          </span>
        </span>
      </div>
      <div style={{ flexGrow: "1" }}></div>
      {config.navItems.map((item, index) => (
        <Link key={index} className="titlebarBtn_header" href={item.href}>
          <div className="titlebarContent_header">
            <p className="titlebarParagraph_header">{item.text}</p>
          </div>
        </Link>
      ))}
    </header>
  );
}

export default Header;
