import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Suhas Nidgundi | Personal Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div id="mainContent">
          <div class="contentIsland">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
