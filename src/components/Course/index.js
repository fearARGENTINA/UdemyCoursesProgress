import React from 'react';
import CourseInfo from './CourseInfo';
import CoursePic from './CoursePic';
import './style.scss';

const Course = () => (
    <div className={"course"}>
        <CoursePic imgSrc={"https://via.placeholder.com/220x125"} />
        <CourseInfo courseId={1374394}/>
    </div>
);

export default Course;