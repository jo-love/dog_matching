import React from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Main from './Pages/Main';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import theme from './Styles/common';

const Routes = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/quiz" component={Quiz} />
					<Route exact path="/result" component={Result} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default Routes;
