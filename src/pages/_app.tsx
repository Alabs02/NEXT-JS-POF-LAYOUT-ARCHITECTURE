import "@/styles/globals.css";
import type { AppProps } from "next/app";

// LAYOUTS
import { AppLayout } from "../layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
