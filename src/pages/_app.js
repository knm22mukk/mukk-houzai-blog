import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import TempleteLayout from '../components/TempleteLayout';
import { GA_ID, pageview } from '../libs/gtag';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (!GA_ID) return;

    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      <TempleteLayout>
        <Component {...pageProps} />
      </TempleteLayout>
    </ThemeProvider>
  );
}

export default MyApp;
