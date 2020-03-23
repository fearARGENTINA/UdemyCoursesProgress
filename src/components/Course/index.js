import React from 'react';
import PropTypes from 'prop-types';
import CourseInfo from './CourseInfo';
import CoursePic from './CoursePic';
import './style.scss';

const Course = ({ data : { id, title, numLectures, instructorJob, instructorId, completed, lastAccessedTime, enrollmentTime, imgSrc} }) => (
    <a href={`https://www.udemy.com/course/${id}`} >
        <div className={"course"}>
            <CoursePic imgSrc={imgSrc} />
            <CourseInfo courseData={{title, numLectures, instructorJob, instructorId, completed, enrollmentTime}}/>
        </div>
    </a>
);

Course.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        numLectures: PropTypes.number.isRequired,
        instructorJob: PropTypes.string.isRequired,
        instructorId: PropTypes.number.isRequired,
        completed: PropTypes.number.isRequired,
        lastAccessedTime: PropTypes.string.isRequired,
        enrollmentTime: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
    }),
};

export default Course;