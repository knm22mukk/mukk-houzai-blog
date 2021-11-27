import Facebook from './facebook.svg';
import Github from './github.svg';
import Instagram from './instagram.svg';
import Mail from './mail.svg';
import Twitter from './twitter.svg';

// Icons taken from: https://simpleicons.org/

const components = {
  facebook: Facebook,
  github: Github,
  instagram: Instagram,
  mail: Mail,
  twitter: Twitter,
};

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className='text-sm text-gray-500 hover:text-gray-600 transition'
      target='_blank'
      rel='noopener noreferrer'
      href={href}
    >
      <span className='sr-only'>{kind}</span>
      <SocialSvg className={`fill-current text-gray-700 hover:text-blue-500 h-${size} w-${size}`} />
    </a>
  );
};

export default SocialIcon;
