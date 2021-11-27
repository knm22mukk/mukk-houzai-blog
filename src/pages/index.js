import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='mt-10 text-center'>
        <h1 className='text-blue-500'>Welcome to Mukk Blog</h1>
      </main>
      <Link href='/blog'>
        <a className='text-blue-600'>ブログページ</a>
      </Link>
    </div>
  );
}
