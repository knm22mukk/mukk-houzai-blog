import headerNavLinks from '../data/headerNavLinks';
import siteMetadata from '../data/siteMetadata';
import Link from './Link';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <div className='py-4 pb-0'>
      <header className='flex justify-between items-center py-10'>
        <div>
          <Link href='/' aria-label='包装資材営業マンむっくのブログサイト'>
            <div className='flex justify-between items-center'>
              <div className='ml-4 h-6 text-3xl font-bold hover:text-blue-600'>
                {siteMetadata.headerTitle}
              </div>
            </div>
          </Link>
        </div>
        <div className='flex items-center text-base leading-5'>
          <div className='hidden sm:block mx-2 '>
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className='p-4 font-bold text-gray-900 hover:text-blue-600'
              >
                {link.title}
              </Link>
            ))}
          </div>
          <MobileNav />
        </div>
      </header>
      <hr className='text-gray-500' />
    </div>
  );
}
