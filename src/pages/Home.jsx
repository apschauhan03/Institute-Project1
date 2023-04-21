import './Home.css';
import Slide from '../components/Home/Corousel/slide';
import Form from '../components/Home/Form/Form';
import Coursestile from '../components/Home/CoursesTile/Coursestile';
import { Posts } from '../components/BlogPost/Posts';


function Home() {
  return (
    <div>
      <Slide />
      <Coursestile />
      <Posts/>
      <Form />
      
    </div>
  );
}

export default Home;
