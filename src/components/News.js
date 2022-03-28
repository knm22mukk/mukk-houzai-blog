export default function News() {
  return (
    <div className='justify-center text-center '>
      <h2 className='px-10 text-4xl font-bold tracking-tight leading-9'>更新情報</h2>
      <div className='justify-center'>
        <p className='p-6 mt-6 text-lg bg-white dark:bg-gray-600 rounded-md shadow-lg'>
          ダークモードとライトモードの変更ができるようになりました。
        </p>
        <p className='p-6 mt-6 text-lg bg-white dark:bg-gray-600 rounded-md shadow-lg'>
          SNSへのシェアボタンを設置しました。是非SNSでご紹介お願いします。
        </p>
        <p className='p-6 mt-6 text-lg bg-white dark:bg-gray-600 rounded-md shadow-lg'>
          プライバシーポリシーを策定しました。
        </p>
      </div>
    </div>
  );
}
