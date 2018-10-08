import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './Home';
import Hola from './components/Pages.js'


class Routers extends Component {
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <Link to="/Pages">Pages</Link>
                        </li>
                    </ul>
                    <Route exact path="/Home" component={App}/>

                    <Route exact path="/Pages" component={Hola}/>
                </div>
            </Router>
        )
    }

}


export default Routers;
// export default () => {
// <BrowserRouter>
// <Switch>
// <Route path="/" component={App} />
// <Route path="/Home" component={App} />
// <Route path="/Pages" component={Hola} />
// </Switch>
// </BrowserRouter>
// };

