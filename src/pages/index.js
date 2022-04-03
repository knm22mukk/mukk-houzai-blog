import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import Link from '../components/Link';
import MyHead from '../components/MyHead';
import News from '../components/News';
import SectionHeader from '../components/Sectionheader';
import ShareButton from '../components/ShareButton';
import TopImage from '../components/TopImage';
import { client } from '../libs/client';

export default function Home({ blog }) {
  return (
    <>
      <MyHead />
      <TopImage />
      <div className='mb-10'>
        <SectionHeader title='最新記事' />
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 xl:px-24'>
          {blog.map((blog) => (
            <BlogCard
              key={blog.id}
              imageSrc={blog.image.url}
              title={blog.title}
              description={blog.description}
              href={`/blog/${blog.id}`}
              publishedAt={blog.publishedAt}
            />
          ))}
        </div>
        <div className='pt-5'>
          <Link href='/blog/page/1'>
            <Button title='記事一覧' />
          </Link>
        </div>
      </div>
      <News />
      <ShareButton url='https://mukk-blog.net/' title='むっくの包装資材ブログ' />
      <SectionHeader title='お問い合わせはこちら' />
      <div className='my-5 border-gray-200'>
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

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      limit: 3,
    },
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};
