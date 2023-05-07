import './Home.css';
import Slide from '../components/Home/Corousel/slide';
import Form from '../components/Home/Form/Form';
import Coursestile from '../components/Home/CoursesTile/Coursestile';
import { Posts } from '../components/BlogPost/Posts';
import { Post } from '../components/BlogPost/Post';


function Home() {
  return (
    <div>
      <Slide />
      <Coursestile />
      {/* <Post/> */}
      {/* <Posts/> */}
      <Form />
      
    </div>
  );
}

export default Home;
