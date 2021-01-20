import * as React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { GlobalStyle } from './Styles/globalStyles';


ReactDOM.render(
	<>
		<GlobalStyle />
		<Routes />
	</>,
	document.getElementById('root')
);
