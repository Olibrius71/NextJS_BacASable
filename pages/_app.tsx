import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Black_Ops_One } from "next/font/google";
import Header from "@/composants/layout/Header";

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
  display: "swap",
  variable: "--font-blackOpsOne",
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col w-full min-h-screen">
    <Header />
    <main className={blackOpsOne.className}>
      <Component {...pageProps} />
    </main>
    </div>
  );
}
