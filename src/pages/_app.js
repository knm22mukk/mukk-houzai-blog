import 'tailwindcss/tailwind.css';
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
    <>
      <TempleteLayout>
        <Component {...pageProps} />
      </TempleteLayout>
    </>
  );
}

export default MyApp;
