import Button from '../components/Button';
import Link from '../components/Link';

export default function Custom404() {
  return (
    <div className='flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center md:mt-24 md:space-x-6'>
      <div className='pt-6 pb-8 md:space-y-5 space-x-2'>
        <h1 className='md:px-6 text-6xl md:text-8xl font-extrabold tracking-tight leading-9 text-gray-900 md:border-r-2'>
          404
        </h1>
      </div>
      <div className='max-w-md'>
        <p className='my-4 text-xl md:text-2xl font-bold leading-normal'>
          ページが見つかりませんでした！
        </p>
        <p className='mb-8'>URLに間違いがないかご確認ください。</p>
        <Link href='/'>
          <Button title='Homeに戻る' />
        </Link>
      </div>
    </div>
  );
}
