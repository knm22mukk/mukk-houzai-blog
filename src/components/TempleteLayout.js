import Footer from './Footer';
import Header from './Header';
import { ScrollTop } from './ScrollTop';
import SectionContainer from './SecitonContainer';

export default function TempleteLayout({ children }) {
  return (
    <SectionContainer>
      <div className='flex flex-col justify-between h-screen'>
        <Header />
        <main className='mb-auto'>
          {children}
          <ScrollTop />
        </main>
        <Footer />
      </div>
    </SectionContainer>
  );
}
