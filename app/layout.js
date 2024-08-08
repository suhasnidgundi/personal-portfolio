import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

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
            <SpeedInsights />
            {children}
            <Analytics />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
