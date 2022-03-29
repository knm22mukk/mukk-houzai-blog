export default function News() {
  return (
    <div className='pb-10 mx-auto max-w-xl md:max-w-2xl xl:max-w-3xl text-center'>
      <h2 className='px-10 text-4xl font-bold tracking-tight leading-9'>更新情報</h2>
      <div className='justify-center'>
        <p className='p-6 mt-6 text-lg text-gray-500 dark:text-white bg-white dark:bg-gray-600 rounded-md border border-gray-200 shadow-lg'>
          ダークモードとライトモードの変更ができるようになりました。
        </p>
        <p className='p-6 mt-6 text-lg text-gray-500 dark:text-white bg-white dark:bg-gray-600 rounded-md border border-gray-200 shadow-lg'>
          SNSへのシェアボタンを設置しました。是非SNSでご紹介お願いします。
        </p>
        <p className='p-6 mt-6 text-lg text-gray-500 dark:text-white bg-white dark:bg-gray-600 rounded-md border border-gray-200 shadow-lg'>
          プライバシーポリシーを策定しました。
        </p>
      </div>
    </div>
  );
}
