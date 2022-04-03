import Footer from './Footer';
import Header from './Header';
import { ScrollTop } from './ScrollTop';

export default function TempleteLayout({ children }) {
  return (
    <>
      <Header />
      <main className='px-4 sm:px-6 pb-10 mx-auto mb-auto max-w-3xl xl:max-w-5xl'>
        {children}
        <ScrollTop />
      </main>
      <Footer />
    </>
  );
}
