import "@mantine/core/styles.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  Container,
  MantineProvider,
} from "@mantine/core";
import theme from "@/theme";

import { HeaderSimple } from "@/components/HeaderSimple/HeaderSimple";
import { FooterSocial } from "@/components/FooterSocial/FooterSocial";
import HotKeysHandler from "@/components/HotKeysHandler/HotKeysHandler";
import { FloatingButtonsColumn } from "@/components/FloatingButtonsColumn";
import NetworkOSInfo from "@/components/NetworkOSInfo";
import { ModalsProvider } from "@mantine/modals";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto" theme={theme}>
          <ModalsProvider>
            {/* Hot Key Handler */}
            <HotKeysHandler />
            <NetworkOSInfo />

            <AppShell>
              {/* Header Start */}
              <AppShellHeader>
                <HeaderSimple />
              </AppShellHeader>
              {/* Header End */}

              <AppShellMain>
                <Container>
                  <SpeedInsights />
                  {children}
                  <Analytics />
                </Container>
              </AppShellMain>

              {/* Footer Start */}
              <AppShellFooter>
                <FooterSocial />
              </AppShellFooter>
              {/* Footer End */}

              <FloatingButtonsColumn />
            </AppShell>
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
