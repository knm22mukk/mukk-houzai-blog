import headerNavLinks from '../data/headerNavLinks';
import siteMetadata from '../data/siteMetadata';
import Link from './Link';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className='flex justify-around items-center py-10 h-32 bg-white'>
      <Link href='/' aria-label='包装資材営業マンむっくのブログサイト'>
        <div className='flex justify-between items-center'>
          <div className='text-4xl font-bold hover:text-indigo-600'>{siteMetadata.headerTitle}</div>
        </div>
      </Link>
      <div className='flex items-center text-base leading-5'>
        <div className='hidden sm:block mx-2'>
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href} className='p-4 font-bold hover:text-indigo-600'>
              {link.title}
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
