import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CourseInfo from './CourseInfo';
import CoursePic from './CoursePic';
import './style.scss';

class Course extends Component {
    render() {
        const {image_240x135, cursoId, ...data} = this.props.data;
        return (
            <a href={`https://www.udemy.com/course/${cursoId}`}>
                <div className={"course"}>
                    <CoursePic imgSrc={image_240x135} />
                    <CourseInfo courseData={data} />
                </div>
            </a>
        );
    }
};

Course.propTypes = {
    data: PropTypes.shape({
        image_240x135: PropTypes.string.isRequired, 
        title: PropTypes.string.isRequired, 
        num_lectures: PropTypes.number.isRequired, 
        instructor_job: PropTypes.string.isRequired, 
        instructor_name: PropTypes.string.isRequired, 
        completion_ratio: PropTypes.number.isRequired, 
        enrollment_time: PropTypes.string.isRequired
    }),
};

export default Course;