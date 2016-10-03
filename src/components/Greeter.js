import React, {PropTypes} from 'react';

const Greeter = (props) => {
    return (
        <div>
            <h1>Hi, {props.name}</h1>
            <button className="btn btn-success">Click me</button>
        </div>);
}
Greeter.propTypes = {
    name: PropTypes.string.isRequired
};

export default Greeter;