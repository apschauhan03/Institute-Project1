import './Home.css';
import Slide from '../components/Home/Corousel/slide';
import Form from '../components/Home/Form/Form';
import Coursestile from '../components/Home/CoursesTile/Coursestile';


function Home() {
  return (
    <div>
      <Slide />
      <Coursestile />
      <Form />
    </div>
  );
}

export default Home;
