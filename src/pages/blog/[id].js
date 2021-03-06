import Image from 'next/image';
import BreadCrumbs from '../../components/Breadcrumbs';
import Button from '../../components/Button';
import Date from '../../components/Date';
import Link from '../../components/Link';
import MyHead from '../../components/MyHead';
import PageTitle from '../../components/PageTitle';
import SectionHeader from '../../components/Sectionheader';
import ShareButton from '../../components/ShareButton';
import siteMetadata from '../../data/siteMetadata';
import { client } from '../../libs/client';

export default function BlogId({ blog }) {
  return (
    <>
      <MyHead
        pageTitle={`むっく || ${blog.title}`}
        pageDescription={blog.description}
        pageImage={blog.image.url}
        pagePath={`${siteMetadata.siteUrl}/blog/${blog.id}`}
      />
      <PageTitle title={blog.title} />
      <BreadCrumbs
        lists={[
          {
            string: 'トップページ',
            path: '/',
          },
          {
            string: 'ブログ',
            path: '/blog/page/1',
          },
          {
            string: blog.title,
          },
        ]}
      />
      <p className='mb-3 text-sm text-center'>
        <Date dateString={blog.publishedAt} />
      </p>
      <article className='sm:py-10 px-6 mx-auto max-w-xl md:max-w-2xl xl:max-w-3xl bg-white dark:bg-gray-600 rounded-lg border border-gray-200 shadow-xl'>
        <div className='px-5 text-center'>
          <Image src={blog.image.url} width={1280} height={720} alt={`${blog.title}イメージ`} />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
          className='p-3 prose dark:prose-invert'
        />
      </article>
      <div className='py-10 text-center'>
        <Link href='/blog/page/1'>
          <Button title='一覧に戻る' />
        </Link>
      </div>
      <ShareButton url={`${siteMetadata.siteUrl}/blog/${blog.id}`} title={blog.title} />
      <SectionHeader title='お問い合わせはこちら' />
      <div className='my-5 text-center border-gray-200'>
        <p className='pb-5 text-gray-500 dark:text-white'>
          ご意見・ご質問などは、下記からお問い合わせください。
        </p>
        <Link href='/contact'>
          <Button title='お問い合わせ' />
        </Link>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
