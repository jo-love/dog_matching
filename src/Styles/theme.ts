import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {

	size: {
		mobile: '(max-width: 768px)',
		tablet: '(max-width: 1023px)',
		laptop: '(max-width: 1460px)',
		desktop: '(max-width: 1700px)',
	},

	colors: {
		background: '#FFC6C9;',
		button: '#00C2CB;',
		textWhite: '#FFFFFF;',
		textLightgrey: '#F2F3F4;',
		textGrayishyellow: '#F9F9F3;',
	},

	positions: {
		flexCenterXY: 'display: flex; justify-content: center; align-items: center;',
		flexCenterX: 'display: flex; justify-content: center;',
		flexCenterY: 'display: flex; align-items: center;',
		flexColumnY: 'display: flex; flex-direction: column; align-items: center;',
		spaceBetween: 'display: flex; justify-content: space-between;',
	},
};
