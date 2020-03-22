import React from 'react';
import PropTypes from 'prop-types';

const CoursePic = ({ imgSrc }) => (
    <div className={"coursePic"}>
        <img src={ imgSrc } alt={ imgSrc }/>
    </div>
);

CoursePic.propTypes = {
    imgSrc: PropTypes.string.isRequired,
};

export default CoursePic;