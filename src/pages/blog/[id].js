import Image from 'next/image';
import Button from '../../components/Button';
import Date from '../../components/Date';
import Link from '../../components/Link';
import MyHead from '../../components/MyHead';
import PageTitle from '../../components/PageTitle';
import { client } from '../../libs/client';

export default function BlogId({ blog }) {
  return (
    <main>
      <MyHead title={`むっく || ${blog.title}`} />
      <PageTitle title={blog.title} />
      <p className='mb-3 text-sm text-center'>
        <Date dateString={blog.publishedAt} />
      </p>
      <div className='text-center'>
        <Image src={blog.image.url} width={400} height={400} alt={`${blog.title}イメージ`} />
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
        className='pt-10 prose'
      />
      <div className='pt-10'>
        <Link href='/blog'>
          <Button title='一覧に戻る' />
        </Link>
      </div>
    </main>
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
