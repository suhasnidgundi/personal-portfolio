import "@/styles/header/style.css";
import { headerConfig } from "@/portfolioInfo";
import dynamic from "next/dynamic";
import Link from "next/link";

dynamic(() => import(require("@/libs/header/script")), {
  loading: () => <p>Loading...</p>,
});

function Header({ config = headerConfig }) {
  return (
    <header>
      <div className="container">
        <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <Link
            href={config.title.href}
            class="d-flex align-items-center link-body-emphasis text-decoration-none"
          >
            <span class="fs-4">{config.title.text}</span>
          </Link>

          <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            {config.navItems.map((item, index) => (
              <a
                key={index}
                class="me-3 py-2 link-body-emphasis text-decoration-none"
                href={item.href}
              >
                {item.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
