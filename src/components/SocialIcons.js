import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const components = {
  github: FaGithub,
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
};

const SocialIcons = ({ kind, href }) => {
  const SocialIcon = components[kind];

  return (
    <a target='_blank' rel='noopener noreferrer' href={href}>
      <SocialIcon className={`hover:text-indigo-500 text-2xl`} />
    </a>
  );
};

export default SocialIcons;
