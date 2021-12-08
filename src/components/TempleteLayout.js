import Footer from './Footer';
import Header from './Header';
import { ScrollTop } from './ScrollTop';
import SectionContainer from './SecitonContainer';

export default function TempleteLayout({ children }) {
  return (
    <>
      <Header />
      <SectionContainer>
        <main className='mb-auto'>
          {children}
          <ScrollTop />
        </main>
      </SectionContainer>
      <Footer />
    </>
  );
}
