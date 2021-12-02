import Image from 'next/image';
import MyHead from '../components/MyHead';
import PageTitle from '../components/PageTitle';
import SocialIcons from '../components/SocialIcons';
import siteMetadata from '../data/siteMetadata';

export default function About() {
  return (
    <>
      <MyHead title={`About || ${siteMetadata.author}`} />
      <PageTitle title='About' />
      <div className='xl:grid xl:grid-cols-3 xl:gap-x-8 items-start'>
        <div className='flex flex-col items-center'>
          <Image
            src='/images/logo.png'
            alt='avatar'
            width={192}
            height='192'
            className='w-48 h-48 rounded-full'
          />
          <h3 className='pt-4 pb-2 text-2xl font-bold tracking-tight leading-8'>
            {siteMetadata.author}
          </h3>
          <div className='flex pt-6 space-x-3'>
            <SocialIcons kind='mail' href={`mailto:${siteMetadata.email}`} size={24} />
            <SocialIcons kind='twitter' href={siteMetadata.twitter} size={24} />
            <SocialIcons kind='instagram' href={siteMetadata.instagram} size={24} />
            <SocialIcons kind='facebook' href={siteMetadata.facebook} size={24} />
            <SocialIcons kind='github' href={siteMetadata.github} size={24} />
          </div>
        </div>
        <div className='xl:col-span-2 pt-8 pb-8 max-w-none'>
          <p className='pt-4 text-gray-500'>
            ようこそ。
            <br />
            包装資材営業マンのむっくです。
            <br />
            私のブログサイトを見に来ていだきありがとうございます。
          </p>
          <p className='pt-4 text-gray-500 '>
            私は包装資材の業界に携わってから約７年が経過しました。
            <br />
            様々な商品が新たに発売していく中で商品情報や、市場の情報をいち早く多く届けたいと思いこのブログサイトを作成しました。
          </p>
          <p className='pt-4 text-gray-500 '>
            商品に関するお問い合わせなどご連絡を頂ける場合は、メールのアイコンからメールをお送りいただくか、
            SNSからDMをお送りいただければ幸いです。
            <br />
            フォローもよろしくお願いいたします。
            <br />
          </p>
          <p className='pt-4 text-gray-500 '>是非ゆっくり見ていってください。</p>
        </div>
      </div>
    </>
  );
}
