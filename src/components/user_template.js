import React from 'react';

import PropTypes from 'prop-types';

const UserTemplate = (props) => {

    console.log(props)
    return (
        <div>
            UserTemplate
        </div>
    );
}

UserTemplate.propTypes = {
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.oneOf(['James', 'Steve'])
    ]),
    lastname: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.arrayOf(PropTypes.string),
    spanish: PropTypes.bool,
    message: PropTypes.func,
    car: PropTypes.object,
    mother: function (props, propName, componentName) {
        if (props[propName] !== 'Jane') {
            return new Error(`The name ${props[propName]} is incorrect, should be Jane.`)
        }
    }
}

export default UserTemplate;