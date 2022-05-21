import { useState } from 'react';
import { BiMessageRoundedEdit } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import BreadCrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import MyHead from '../components/MyHead';
import PageTitle from '../components/PageTitle';
import siteMetadata from '../data/siteMetadata';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});

  const [buttonText, setButtonText] = useState('送信する');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors['name'] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('送信中...');
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('送信する');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('送信する');
    }
  };

  return (
    <>
      <MyHead
        pageTitle='むっく || お問い合わせ'
        pageDescription='包装資材営業マンむっくのお問い合わせページ　お問い合わせはこちらからお願いします'
        pagePath={`${siteMetadata.siteUrl}/contact`}
      />
      <PageTitle title='Contact' />
      <BreadCrumbs
        lists={[
          {
            string: 'トップページ',
            path: '/',
          },
          {
            string: 'お問い合わせ',
          },
        ]}
      />
      <p className='mb-10 text-sm text-center text-gray-500 dark:text-white'>
        ブログ記事に関すること、ブログ運営に関することなど何でもお気軽にお問い合わせください。
        <br />
        お問い合わせいただいてから2,3日以内にご連絡させていただきます。
      </p>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col py-8 px-8 mx-auto bg-white dark:bg-gray-600 rounded-lg border border-gray-200 shadow-xl'
      >
        <div className='text-left'>
          {showSuccessMessage && (
            <p className='my-2 text-sm font-semibold text-green-500'>
              ありがとうございます！お問い合わせは正常に送信されました！
            </p>
          )}
          {showFailureMessage && (
            <p className='text-red-500'>
              エラーにより送信できませんでした。もう一度お願いいたします。
            </p>
          )}
        </div>
        <label htmlFor='name' className='mt-8 mb-2 font-light text-gray-500 dark:text-white'>
          <CgProfile className='inline-flex mr-2' />
          お名前<span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          name='name'
          className='py-1 px-3 w-full text-base leading-8 text-gray-700 bg-gray-100 focus:bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out outline-none'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {errors?.name && <p className='text-red-500'>お名前は入力必須です。</p>}

        <label htmlFor='email' className='mt-8 mb-2 font-light text-gray-500 dark:text-white'>
          <HiOutlineMail className='inline-flex mr-2' />
          メールアドレス<span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          name='email'
          className='py-1 px-3 w-full text-base leading-8 text-gray-700 bg-gray-100 focus:bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out outline-none'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors?.email && <p className='text-red-500'>メールアドレスは入力必須です。</p>}

        <label htmlFor='message' className='mt-8 mb-2 font-light text-gray-500 dark:text-white'>
          <BiMessageRoundedEdit className='inline-flex mr-2' />
          お問い合わせ内容<span className='text-red-500'>*</span>
        </label>
        <textarea
          rows='5'
          type='text'
          name='message'
          className='py-1 px-3 w-full h-32 text-base leading-6 text-gray-700 bg-gray-100 focus:bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out outline-none resize-none'
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        {errors?.message && <p className='text-red-500'>お問い合わせ内容は入力必須です。</p>}

        <div className='pt-8 text-center'>
          <button
            className='py-2 px-4 font-bold text-white bg-blue-500 rounded opacity-50 cursor-not-allowed'
            disabled
          >
            調整中のため送信できません
          </button>
        </div>
      </form>
    </>
  );
}
