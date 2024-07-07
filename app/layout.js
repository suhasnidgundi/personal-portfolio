import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "",
  description: "",
  author: "",
  keywords: "",
  robots: "",
  viewport: "",
  themeColor: "",
  msapplicationTileColor: "",
  msapplicationTileImage: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div id="mainContent">
          <div className="contentIsland">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
