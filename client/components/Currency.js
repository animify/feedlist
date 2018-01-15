import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ detail }) => (
    <div className="xs-12">
        <p>{ detail.name }</p>
    </div>
);

Currency.propTypes = {
    detail: PropTypes.object.isRequired
}

export default Currency;
