import React from 'react';
import PropTypes from 'prop-types';

const CourseInfo = ({courseData: {title, numLectures, instructorJob, instructorId, completed, enrollmentTime}}) => (
    <div className={"courseInfo"}>
        <h1>{title}</h1>
        <p>Clases: {numLectures}</p>
        <p>Completado: {completed}</p>
    </div>
);

CourseInfo.propTypes = {
    courseData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        numLectures: PropTypes.number.isRequired, 
        instructorJob: PropTypes.string.isRequired, 
        instructorId: PropTypes.number.isRequired, 
        completed: PropTypes.number.isRequired, 
        enrollmentTime : PropTypes.string.isRequired,
    }),
};

export default CourseInfo;