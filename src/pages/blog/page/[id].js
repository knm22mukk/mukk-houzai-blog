import Image from 'next/image';
import BlogCard from '../../../components/BlogCard';
import BreadCrumbs from '../../../components/Breadcrumbs';
import MyHead from '../../../components/MyHead';
import PageTitle from '../../../components/PageTitle';
import Pagination from '../../../components/Pagination';
import { client } from '../../../libs/client';

const PER_PAGE = 12;

export default function BlogPage({ blog, totalCount }) {
  return (
    <>
      <MyHead title='むっく || ブログ一覧' />
      <BreadCrumbs
        lists={[
          {
            string: 'トップページ',
            path: '/',
          },
          {
            string: 'ブログ',
          },
        ]}
      />
      <PageTitle title='Blog' />
      <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {blog.map((blog) => (
          <BlogCard
            key={blog.id}
            imageSrc={blog.image.url}
            title={blog.title}
            href={`/blog/${blog.id}`}
            publishedAt={blog.publishedAt}
          />
        ))}
      </div>
      <Pagination totalCount={totalCount} />
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: 'blog',
    queries: { limit: PER_PAGE, offset: (id - 1) * PER_PAGE },
  });
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};
