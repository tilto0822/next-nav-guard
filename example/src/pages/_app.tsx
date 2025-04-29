import type { AppProps } from "next/app";
import { NavigationGuardProvider } from "next-nav-guard";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavigationGuardProvider>
      <Component {...pageProps} />
    </NavigationGuardProvider>
  );
}
