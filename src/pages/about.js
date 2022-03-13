import Image from 'next/image';
import BreadCrumbs from '../components/Breadcrumbs';
import MyHead from '../components/MyHead';
import PageTitle from '../components/PageTitle';
import SocialIcons from '../components/SocialIcons';
import siteMetadata from '../data/siteMetadata';

export default function About() {
  return (
    <>
      <MyHead title='むっく || 自己紹介' />
      <BreadCrumbs
        lists={[
          {
            string: 'トップページ',
            path: '/',
          },
          {
            string: '自己紹介',
          },
        ]}
      />
      <PageTitle title='About' />
      <div className='py-10 px-5 bg-white rounded-lg shadow-xl'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-x-8 items-start'>
          <div className='flex flex-col items-center'>
            <Image
              src='/images/logo.png'
              alt='avatar'
              width={192}
              height={192}
              className='w-48 h-48 rounded-full'
            />
            <h3 className='pt-4 pb-2 text-2xl font-bold tracking-tight leading-8'>
              {siteMetadata.author}
            </h3>
            <div className='flex pt-6 space-x-5'>
              <SocialIcons kind='twitter' href={siteMetadata.twitter} size={10} />
              <SocialIcons kind='instagram' href={siteMetadata.instagram} size={10} />
              <SocialIcons kind='facebook' href={siteMetadata.facebook} size={10} />
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
            <p className='pt-4 text-gray-500'>
              私は包装資材の業界に携わってから約７年が経過しました。
              <br />
              様々な商品が新たに発売していく中で商品情報や、市場の情報をいち早く多く届けたいと思いこのブログサイトを作成しました。
            </p>
            <p className='pt-4 text-gray-500'>
              何かお気づきのことがございましたら、お問い合わせページからお問い合わせいただくか
              <br />
              SNSよりDMをお送りください。
              <br />
              SNSのフォローもよろしくお願いいたします。
              <br />
            </p>
            <p className='pt-4 text-gray-500'>是非ゆっくり見ていってください。</p>
          </div>
        </div>
      </div>
    </>
  );
}
