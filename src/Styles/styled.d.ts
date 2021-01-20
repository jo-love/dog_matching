import 'styled-components';

declare module 'styled-components' {
	//인터페이스명 지정
	export interface DefaultTheme {
		size: {
			mobile: string;
			tablet: string;
			laptop: string;
			desktop: string;
		};

		colors: {
			background: string;
			button: string;
			textWhite: string;
			textLightgrey: string;
			textGrayishyellow: string;
		};

		positions: {
			flexCenterXY: string;
			flexCenterX: string;
			flexCenterY: string;
			flexColumnY: string;
			spaceBetween: string;
		};
	}
}
