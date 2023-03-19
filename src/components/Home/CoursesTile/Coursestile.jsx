import React from 'react'
import CourseCard from '../../CourseCard/CourseCard'
import './CourseTile.css'

export default function Coursestile() {
 
    const course= {
        title: "Course Name",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgUrl:"https://cdn.pixabay.com/photo/2017/01/01/14/39/hacker-1944688_1280.jpg"
      };
      // const [count, setCount] = useState(0)
    
      return (
        <div className='CourseTile'>
          <h1>Courses that we offer</h1>
          <div className="courses">
            <CourseCard
              title= {course.title}
              content= {course.content}
              imgUrl= {course.imgUrl}
            />
            <CourseCard
              title= {course.title}
              content= {course.content}
              imgUrl= {course.imgUrl}
            />
            <CourseCard
              title= {course.title}
              content= {course.content}
              imgUrl= {course.imgUrl}
            />
            <CourseCard
              title= {course.title}
              content= {course.content}
              imgUrl= {course.imgUrl}
            />
            <CourseCard
              title= {course.title}
              content= {course.content}
              imgUrl= {course.imgUrl}
            />
            <CourseCard
              title= {course.title}
              content= {course.content}
              imgUrl= {course.imgUrl}
            />
          </div>
        </div>
      );
}
