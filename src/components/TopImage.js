import Button from './Button';
import Link from './Link';

export default function TopImage() {
  return (
    <div className='container flex flex-col items-center py-12 mx-auto'>
      <div className='lg:flex flex-col justify-center items-center mb-5 sm:mb-10 w-11/12 sm:w-2/3'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-7 md:leading-10 text-center text-gray-800'>
          包装資材営業マンむっく
          <br />
          個人ブログサイト
        </h1>
        <p className='mt-5 sm:mt-10 lg:w-10/12 text-sm sm:text-lg font-normal text-center text-gray-400'>
          包装資材の営業マンむっくが商品情報、市場の情報などを発信する個人ブログサイトです。
          <br />
          新商品、注目されている商品を都度更新していきますのでゆっくり見ていってください。
        </p>
      </div>
      <div className='flex justify-around items-center'>
        <Link href='/blog' className>
          <Button title='記事一覧' />
        </Link>
      </div>
    </div>
  );
}
