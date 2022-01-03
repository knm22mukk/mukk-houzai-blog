import Footer from './Footer';
import Header from './Header';
import { ScrollTop } from './ScrollTop';

export default function TempleteLayout({ children }) {
  return (
    <>
      <Header />
      <main className='bg-gray-100'>
        <div className='px-4 sm:px-6 xl:px-0 pb-10 mx-auto max-w-3xl xl:max-w-5xl'>{children}</div>
        <ScrollTop />
      </main>
      <Footer />
    </>
  );
}
