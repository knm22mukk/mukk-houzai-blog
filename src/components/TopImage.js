import siteMetadata from '../data/siteMetadata';
import Link from './Link';
import SocialIcons from './SocialIcons';

export default function TopImage() {
  return (
    <>
      <div
        className='pt-3 w-full h-96 bg-cover opacity-80'
        style={{ backgroundImage: `url('images/moldimage.webp')` }}
      >
        <div className='flex justify-center items-center w-full h-full'>
          <div className='mx-10 text-center'>
            <h1 className='mb-4 text-5xl font-bold text-white'>MUKK BLOG</h1>
            <p className='inline-block sm:block text-lg text-white'>
              包装資材、グルメ情報を発信する個人ブログです。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
