import "@/shared/lib/styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "@/features/providers";

export const metadata: Metadata = {
  title: "MTL Association",
  description: "MTL Association",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
