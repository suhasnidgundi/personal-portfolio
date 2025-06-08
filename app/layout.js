import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';

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
import { ModalsProvider } from "@mantine/modals";

import theme from "@/theme";
import HotKeysHandler from "@/components/HotKeysHandler/HotKeysHandler";

import { HeaderSimple } from "@/components/HeaderSimple/HeaderSimple";
import { FooterSocial } from "@/components/FooterSocial/FooterSocial";
import { FloatingButtonsColumn } from "@/components/FloatingButtonsColumn";
import NetworkOSInfo from "@/components/NetworkOSInfo";
import { RootStyleRegistry } from "./EmotionRootStyleRegistry";
import { AuthProvider } from "@/contexts/AuthContext";
import { Notifications } from "@mantine/notifications";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <RootStyleRegistry>
          <MantineProvider defaultColorScheme="auto" theme={theme}>
            <ModalsProvider>
              <Notifications/>
              <AuthProvider>
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
                    <Container size="lg" my="5rem">
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
              </AuthProvider>
            </ModalsProvider>
          </MantineProvider>
        </RootStyleRegistry>


      </body>
    </html>
  );
}
