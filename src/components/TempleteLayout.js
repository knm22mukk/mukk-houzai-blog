import Footer from './Footer';
import Header from './Header';
import SectionContainer from './SecitonContainer';

export default function TempleteLayout({ children }) {
  return (
    <SectionContainer>
      <div className='flex flex-col justify-between h-screen'>
        <Header />
        <main className='mb-auto'>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
}
