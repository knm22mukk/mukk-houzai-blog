import 'tailwindcss/tailwind.css';
import TempleteLayout from '../components/TempleteLayout';

function MyApp({ Component, pageProps }) {
  return (
    <TempleteLayout>
      <Component {...pageProps} />
    </TempleteLayout>
  );
}

export default MyApp;
