import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Main from './Pages/Main';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Contributors from './Pages/Contributors';
import { ResultContextProvider } from './Contexts/ResultContext';
import { theme } from './Styles/theme';

function Routes() {
	return (
		<ResultContextProvider>
			<ThemeProvider theme={theme}>
				<Router>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route exact path="/quiz" component={Quiz} />
						<Route exact path="/result" component={Result} />
						<Route exact path="/contributors" component={Contributors} />
					</Switch>
				</Router>
			</ThemeProvider>
		</ResultContextProvider>
	);
}

export default Routes;
