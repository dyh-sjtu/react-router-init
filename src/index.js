import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'
import NotFound from './404/404';
import Home from './home/home';
import Detail from './detail/detail';
import About from './about/about';
import registerServiceWorker from './registerServiceWorker';


const RoutesConfig = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path='/' exact component={Home}></Route>
					<Route path='/home' exact component={Home}></Route>
					<Route path='/index' exact component={Home}></Route>
					<Route path='/detail' component={Detail}></Route>
					<Route path='/about' component={About}></Route>
					<Route path='/404' component={NotFound}></Route>
					<Redirect from='*' to='/404' />
				</Switch>
			</div>
		</Router>
	)
};

ReactDOM.render(<RoutesConfig />, document.getElementById('root'));
registerServiceWorker();
