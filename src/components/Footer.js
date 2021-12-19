import siteMetadata from '../data/siteMetadata';
import Link from './Link';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer>
      <div className='flex flex-col items-center mt-10'>
        <div className='flex mb-3 space-x-4'>
          <SocialIcons kind='mail' href={`mailto:${siteMetadata.email}`} size={24} />
          <SocialIcons kind='twitter' href={siteMetadata.twitter} size={24} />
          <SocialIcons kind='instagram' href={siteMetadata.instagram} size={24} />
          <SocialIcons kind='facebook' href={siteMetadata.facebook} size={24} />
        </div>
        <div className='flex mb-2 space-x-2 text-sm text-gray-500'>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <Link href='/'>{siteMetadata.title}</Link>
        </div>
        <div className='mb-8 text-sm text-gray-500'>
          <Link href={siteMetadata.github}>Mukk Blog</Link>
        </div>
      </div>
    </footer>
  );
}
