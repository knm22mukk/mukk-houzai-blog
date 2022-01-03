import BlogCard from '../components/BlogCard';
import MyHead from '../components/MyHead';
import PageTitle from '../components/PageTitle';
import { client } from '../libs/client';

export default function Blog({ blog }) {
  return (
    <>
      <MyHead title='むっく || ブログ一覧' />
      <PageTitle title='Blog' />
      <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
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
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      limit: 9999,
    },
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};
