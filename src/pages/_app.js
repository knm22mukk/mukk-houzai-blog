import 'tailwindcss/tailwind.css';
import TempleteLayout from '../components/TempleteLayout';
import usePageView from '../components/analytics/usePageView';

function MyApp({ Component, pageProps }) {
  usePageView();

  return (
    <>
      <TempleteLayout>
        <Component {...pageProps} />
      </TempleteLayout>
    </>
  );
}

export default MyApp;
