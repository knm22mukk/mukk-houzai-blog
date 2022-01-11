import Footer from './Footer';
import Header from './Header';
import { ScrollTop } from './ScrollTop';

export default function TempleteLayout({ children }) {
  return (
    <>
      <Header />
      <main className='text-gray-900 bg-gray-100'>
        {children}
        <ScrollTop />
      </main>
      <Footer />
    </>
  );
}
