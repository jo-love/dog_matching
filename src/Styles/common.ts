const size = {
	mobile: '768px',
	tablet: '1023px',
	laptop: '1460px',
  desktop: '1700x',
};

const colors = {
  deepPink: '#f54278',
  mintgreen: '77CBC3',
	textWhite: '#FFFFFF',
	textLightgrey: '#F2F3F4',
	textGrayishyellow: '#F9F9F3',
};

const theme = {
	colors,
	flexCenterXY: 'display: flex; justify-content: center; align-items: center;',
	flexCenterX: 'display: flex; justify-content: center;',
	flexCenterY: 'display: flex; align-items: center;',
	mobile: `(max-width: ${size.mobile})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	desktop: `(max-width: ${size.desktop})`,
};

export default theme;
