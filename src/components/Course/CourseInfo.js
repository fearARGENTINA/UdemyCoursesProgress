import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar';

const CourseInfo = ({courseData: {title, num_lectures, instructor_job, instructor_name, completion_ratio, enrollment_time}}) => (
    <div className={"courseInfo"}>
        <h1>{title}</h1>
        <p>{`${instructor_name}, ${instructor_job}`}</p>
        <p>{num_lectures} clases</p>
        <ProgressBar striped variant="success" now={completion_ratio} label={`${completion_ratio}%`}/>
    </div>
);

CourseInfo.propTypes = {
    courseData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        num_lectures: PropTypes.number.isRequired, 
        instructor_job: PropTypes.string.isRequired, 
        instructor_name: PropTypes.string.isRequired, 
        completion_ratio: PropTypes.number.isRequired, 
        enrollment_time : PropTypes.string.isRequired,
    }),
};

export default CourseInfo;