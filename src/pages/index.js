import MyHead from '../components/MyHead';
import PageTitle from '../components/PageTitle';

export default function Home() {
  return (
    <div>
      <MyHead />
      <main>
        <PageTitle title='Home' />
        <div className='h-72 text-center'>main</div>
      </main>
    </div>
  );
}
