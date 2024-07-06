import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import GoogleCaptchaWrapper from "@/libs/GoogleCaptchaWrapper";

export const metadata = {
  title: "Suhas Nidgundi | Personal Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleCaptchaWrapper>
          <Header />
          <div id="mainContent">
            <div class="contentIsland">
              {children}
              <Footer />
            </div>
          </div>
        </GoogleCaptchaWrapper>
      </body>
    </html>
  );
}
