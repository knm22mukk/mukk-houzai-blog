import Image from 'next/image';
import siteMetadata from '../data/siteMetadata';

export default function TopImage() {
  return (
    <>
      <div className=''>
        <Image
          src='/images/moldimage.webp'
          width={1024}
          height={500}
          alt='TopImage'
          className='opacity-70'
        />
      </div>
      <h2 className='my-4 text-3xl font-bold text-center'>{siteMetadata.title}</h2>
      <p className='mt-2 font-semibold text-center'>
        包装資材に関する新商品や話題の情報をご紹介します。
      </p>
      <p className='mt-2 font-semibold text-center'>良ければSNSでのシェアもお願いします。</p>
    </>
  );
}
