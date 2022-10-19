const colors = {
  // WHITE
  WHITE: '#ffffff',
  PRIMARY: '#0089d0',

  // GRAY
  GRAY: '#8A94A6',
  GRAY1: '#323B4B',
  GRAY2: '#4E5D78',
  GRAY4: '#B0B7C3',
  GRAY5: '#c1c7d0',
  GRAY6: '#E2E8F0',
  GRAY7: '#FAF9F3',
  GRAY_DARK: '#323B4B',
  GRAY_LINE: '#E0E0E0',

  // BLUE
  BLUE: '#4b7cf3',

  // BLACK
  BLACK: '#000000',
  BLACK_1: '#141322',

  // RED
  RED: '#EE002A',
  RED2: '#fd163f'
};

export const defaultTheme = {
  colors,
  fontSize: {
    bigger: '22px',
    big: '20px',
    high: '18px',
    medium: '16px',
    normal: '14px',
    small: '12px',
    tiny: '10px'
  },
  spacing: {
    lg: '24px', // containers
    md: '16px', // small containers and buttons
    sm: '12px', // Form controls and items
    xs: '8px', // small items
    xss: '4px' // more small
  },
  layout: {
    sidebar: '200px'
  },
  responsiveUtils: {
    xxlMinWidth: '1600px',
    xxlMaxWidth: '1599px',
    xlMinWidth: '1200px',
    xlMaxWidth: '1199px',
    lgMinWidth: '992px',
    lgMaxwidth: '991px',
    mdMinWidth: '768px',
    mdMaxWidth: '767px'
  },
  boxShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.05)'
  }
};
