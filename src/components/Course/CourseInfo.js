import React from 'react';
import PropTypes from 'prop-types';

const CourseInfo = ({ courseId }) => (
    <div className={"courseInfo"}>
        <h1>Course Info: {courseId}</h1>
        <span>Course data</span>
    </div>
);

CourseInfo.propTypes = {
    courseId: PropTypes.number.isRequired,
};

export default CourseInfo;