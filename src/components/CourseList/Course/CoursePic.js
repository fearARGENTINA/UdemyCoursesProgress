import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';

const CoursePic = ({ imgSrc }) => (
    <div className={"coursePic"}>
        <Image src={ imgSrc } alt={ imgSrc } />
    </div>
);

CoursePic.propTypes = {
    imgSrc: PropTypes.string.isRequired,
};

export default CoursePic;