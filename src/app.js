import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';

const appContainer = document.getElementById("app");

const Greeter = (props) => {
    return (<h1>Hi, {props.name}</h1>);
}
Greeter.propTypes = {
    name: PropTypes.string.isRequired
};


ReactDOM.render(<Greeter name="John Doe" />, appContainer);
