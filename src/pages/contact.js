import { useState } from 'react';
import { BiMessageRoundedEdit } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import Button from '../components/Button';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';

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
    console.log('errors', errors);
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
          namename: name,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('送信する');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('送信する');
    }
    console.log(name, email, message);
  };

  return (
    <Container>
      <PageTitle title='お問い合わせ' />
      <p className='mb-10 text-sm text-center text-gray-500'>
        ブログ記事に関すること、ブログ運営に関することなど何でもお気軽にお問い合わせください。
        <br />
        お問い合わせいただいてから2,3日以内にご連絡させていただきます。
      </p>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col py-8 px-8 mx-auto bg-white rounded-lg shadow-xl'
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
        <label htmlFor='name' className='mt-8 font-light text-gray-500'>
          <CgProfile className='inline-flex mr-2' />
          お名前<span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          name='name'
          className='py-2 pl-4 font-light text-gray-500 bg-transparent focus:rounded-md border-b focus:ring-1 ring-green-500 focus:outline-none'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {errors?.name && <p className='text-red-500'>お名前は入力必須です。</p>}

        <label htmlFor='email' className='mt-8 font-light text-gray-500'>
          <HiOutlineMail className='inline-flex mr-2' />
          メールアドレス<span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          name='email'
          className='py-2 pl-4 font-light text-gray-500 bg-transparent focus:rounded-md border-b focus:ring-1 ring-green-500 focus:outline-none'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors?.email && <p className='text-red-500'>メールアドレスは入力必須です。</p>}

        <label htmlFor='message' className='mt-8 font-light text-gray-500'>
          <BiMessageRoundedEdit className='inline-flex mr-2' />
          お問い合わせ内容<span className='text-red-500'>*</span>
        </label>
        <textarea
          rows='5'
          type='text'
          name='message'
          className='py-2 pl-4 font-light text-gray-500 bg-transparent focus:rounded-md border-b focus:ring-1 ring-green-500 focus:outline-none'
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        {errors?.message && <p className='text-red-500'>お問い合わせ内容は入力必須です。</p>}

        <div className='pt-8 text-center'>
          <Button title={buttonText} />
        </div>
      </form>
    </Container>
  );
}
