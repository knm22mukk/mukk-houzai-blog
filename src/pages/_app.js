import 'tailwindcss/tailwind.css';
import TempleteLayout from '../components/TempleteLayout';
import GoogleAnalytics from '../components/analytics/GoogleAnalytics';
import usePageView from '../components/analytics/usePageView';

function MyApp({ Component, pageProps }) {
  usePageView();

  return (
    <>
      <GoogleAnalytics />
      <TempleteLayout>
        <Component {...pageProps} />
      </TempleteLayout>
    </>
  );
}

export default MyApp;
