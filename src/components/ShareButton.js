import {
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  FacebookShareButton,
  LineShareButton,
  TwitterIcon,
  FacebookIcon,
  LineIcon,
} from 'react-share';
import SectionHeader from './Sectionheader';

export default function ShareButton({ url, title }) {
  return (
    <>
      <SectionHeader title='SNSへシェアする' />
      <div className='flex justify-center items-center p-5 space-x-4'>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <LineShareButton url={url} title={title}>
          <LineIcon size={32} round={true} />
        </LineShareButton>
        <EmailShareButton url={url} subject={title}>
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
      </div>
    </>
  );
}
