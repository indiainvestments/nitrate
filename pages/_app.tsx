import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <NextThemesProvider attribute="class">
      <Component {...pageProps} />
    </NextThemesProvider>
  );
}
export default MyApp;
