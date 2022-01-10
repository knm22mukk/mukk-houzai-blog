import siteMetadata from '../data/siteMetadata';
import Link from './Link';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className='pt-10 h-48 bg-gray-600'>
      <div className='flex flex-col items-center text-white'>
        <div className='flex mb-4 space-x-4'>
          <SocialIcons kind='mail' href={`mailto:${siteMetadata.email}`} size={9} />
          <SocialIcons kind='twitter' href={siteMetadata.twitter} size={9} />
          <SocialIcons kind='instagram' href={siteMetadata.instagram} size={9} />
          <SocialIcons kind='facebook' href={siteMetadata.facebook} size={9} />
        </div>
        <div className='flex my-2 space-x-2 text-sm'>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <Link href='/'>{siteMetadata.title}</Link>
        </div>
        <div className='mb-10 text-sm'>
          <Link href={siteMetadata.github}>{siteMetadata.headerTitle}</Link>
        </div>
      </div>
    </footer>
  );
}
