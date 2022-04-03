import SectionHeader from './Sectionheader';

export default function News() {
  return (
    <>
      <SectionHeader title='更新情報' />
      <ul className=''>
        <li className='p-3 text-gray-600 dark:text-white'>
          ダークモードとライトモードの変更ができるようになりました。
        </li>
        <li className='p-3 text-gray-600 dark:text-white'>
          SNSへのシェアボタンを設置しました。是非SNSでご紹介お願いします。
        </li>
        <li className='p-3 text-gray-600 dark:text-white'>プライバシーポリシーを策定しました。</li>
      </ul>
    </>
  );
}
