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

export default function ShareButton({ url, title }) {
  return (
    <div className='px-6 my-10 mx-auto max-w-xl md:max-w-2xl xl:max-w-3xl bg-white dark:bg-gray-600 rounded-lg border border-gray-200 shadow-xl'>
      <div className='justify-center py-10 text-center'>
        <h2 className='mb-5 text-4xl font-bold tracking-tight leading-9'>シェアする</h2>
        <div className='flex justify-center items-center space-x-4'>
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
      </div>
    </div>
  );
}
