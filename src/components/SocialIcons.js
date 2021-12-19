import Image from 'next/image';

// Icons taken from: https://simpleicons.org/

const SocialIcons = ({ kind, href, size = 30 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null;

  return (
    <a target='_blank' rel='noopener noreferrer' href={href}>
      <Image src={`/images/social-icons/${kind}.svg`} alt='sns_icon' width={size} height={size} />
    </a>
  );
};

export default SocialIcons;
