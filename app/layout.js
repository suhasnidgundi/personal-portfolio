// import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellSection,
} from "@mantine/core";

import "@mantine/core/styles.css";
import { ColorSchemeScript, Container, MantineProvider } from "@mantine/core";
import theme from "@/theme";
import { HeaderSimple } from "@/components/HeaderSimple/HeaderSimple";
import { FooterSocial } from "@/components/FooterSocial/FooterSocial";

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
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell>
            {/* Header Start */}
            <AppShellHeader>
              <HeaderSimple />
            </AppShellHeader>
            {/* Header End */}
            <AppShellSection>
              <Container >
                <Container >
                  <SpeedInsights />
                  {children}
                  <Analytics />
                </Container>
              </Container>
            </AppShellSection>
            {/* Footer Start */}
            <AppShellFooter>
              <FooterSocial />
            </AppShellFooter>
            {/* Footer End */}
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
