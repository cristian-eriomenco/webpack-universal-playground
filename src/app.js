import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Greeter from './components/Greeter';

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';

const appContainer = document.getElementById("app");


ReactDOM.render(<Greeter name="John Doe" />, appContainer);
