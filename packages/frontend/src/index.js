import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

import "./style/main.less";
class Welcome extends React.Component {
    render() {
        return (
            <React.Fragment>

                <p>This is the main entry</p>
                <Home />

            </React.Fragment>
        );
    }
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
