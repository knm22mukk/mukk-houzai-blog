import BlogCard from '../components/BlogCard';
import { client } from '../libs/client';

export default function Blog({ blog }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3'>
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
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
