import headerNavLinks from '../data/headerNavLinks';
import siteMetadata from '../data/siteMetadata';
import Link from './Link';

export default function Header() {
  return (
    <div className='sticky top-0 z-50 py-4 shadow-xl'>
      <header className='flex justify-between items-center py-10'>
        <div>
          <Link href='/' aria-label='包装資材営業マンむっくのブログサイト'>
            <div className='flex justify-between items-center'>
              <div className='mr-3'></div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className='hidden sm:block h-6 text-3xl font-bold hover:text-blue-600'>
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>
        <div className='flex items-center text-base leading-5'>
          <div className='hidden sm:block mx-2 '>
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className='p-1 sm:p-4 font-medium text-gray-900 hover:text-blue-600'
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}
