import ScrollTop from "@/composants/layout/ScrollTop";
import Footer from "@/composants/layout/Footer";
import Header from "@/composants/layout/Header";
import {Black_Ops_One} from "next/font/google";
import "@/styles/globals.css";


const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
  display: "swap",
  variable: "--font-blackOpsOne",
});

export default function AppLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
    <body className="min-h-full flex flex-col bg-amber-400">
      <Header />
      <main className={blackOpsOne.className}>
        {children}
      </main>
      <ScrollTop />
      <Footer />
    </body>
    </html>
  );
}