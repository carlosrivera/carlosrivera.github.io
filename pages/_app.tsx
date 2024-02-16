import '../styles/globals.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carlos Rivera - Product Builder",
  description: "",
};

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
