import { FaFacebook, FaMailBulk, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const components = {
  mail: FaMailBulk,
  github: FaGithub,
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
};

const SocialIcons = ({ kind, href, size = 30 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null;

  const SocialIcon = components[kind];

  return (
    <a target='_blank' rel='noopener noreferrer' href={href}>
      <SocialIcon className={`fill-current hover:text-indigo-500 h-${size} w-${size}`} />
    </a>
  );
};

export default SocialIcons;
