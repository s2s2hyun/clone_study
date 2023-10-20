"use client";

import "./globals.css";
import LayoutFooter from "../components/layout/LayoutFooter";
import LayoutHeader from "../components/layout/LayoutHeader";
import { ReduxProviders } from "@/redux/providers";
import StyledComponentsRegistry from "@/lib/registry";
import { LayoutHeaderNavigation } from "@/components/layout/LayoutHeaderNavigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <ReduxProviders>
          <StyledComponentsRegistry>
            <LayoutHeader />
            <LayoutHeaderNavigation />
            <main>{children}</main>
            {/* <LayoutFooter /> */}
          </StyledComponentsRegistry>
        </ReduxProviders>
      </body>
    </html>
  );
}
