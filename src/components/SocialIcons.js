import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const components = {
  mail: HiOutlineMail,
  github: FaGithub,
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
};

const SocialIcons = ({ kind, href }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null;

  const SocialIcon = components[kind];

  return (
    <a target='_blank' rel='noopener noreferrer' href={href}>
      <SocialIcon className={`hover:text-indigo-500 text-2xl`} />
    </a>
  );
};

export default SocialIcons;
