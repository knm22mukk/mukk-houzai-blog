import Image from 'next/image';
import Button from './Button';
import Container from './Container';
import Link from './Link';

export default function Header() {
  return (
    <Container>
      <div className='hidden sm:block'>
        <Image
          src='/images/mukkblog_topimage_1280x700.webp'
          width={1280}
          height={700}
          alt='mukk_blog_image'
        />
      </div>
      <div className='sm:hidden'>
        <Image
          src='/images/mukkblog_topimage_640x350.webp'
          width={640}
          height={350}
          alt='mukk_blog_image'
        />
      </div>
    </Container>
  );
}
