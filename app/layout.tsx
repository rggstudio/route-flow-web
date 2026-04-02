import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://route-flow-web.vercel.app"),
  title: "RouteFlow Mobile",
  description:
    "RouteFlow Mobile helps independent drivers organize rides, recurring routes, navigation, rider communication, earnings, and weekly summaries.",
  openGraph: {
    title: "RouteFlow Mobile",
    description:
      "Your rides. Finally organized. RouteFlow gives drivers one mobile command center for routes, riders, navigation, and weekly earnings.",
    images: ["/routeflow-splash-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`} id="top">
      <body>{children}</body>
    </html>
  );
}
