import MyHead from '../components/MyHead';
import PageTitle from '../components/PageTitle';

export default function Home() {
  return (
    <div>
      <MyHead />
      <main>
        <PageTitle title='Home' />
      </main>
    </div>
  );
}
