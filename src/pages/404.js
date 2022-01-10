import Button from '../components/Button';
import Link from '../components/Link';

export default function Custom404() {
  return (
    <div className='flex justify-center items-center py-10 m-auto w-2/3'>
      <div className='overflow-hidden pb-8 sm:rounded-lg'>
        <div className='pt-8 text-center'>
          <h1 className='text-9xl font-bold'>404</h1>
          <h1 className='py-8 text-6xl font-medium'> Page not found</h1>
          <p className='px-12 pb-8 text-2xl font-medium'>ページが見つかりませんでした。</p>
          <Link href='/'>
            <Button title='ホームに戻る' />
          </Link>
        </div>
      </div>
    </div>
  );
}
