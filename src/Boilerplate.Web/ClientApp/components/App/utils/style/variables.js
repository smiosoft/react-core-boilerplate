// APP SIZE
const appHeaderHeight = '3rem';
const appFooterHeight = '3rem';
const appMainHeight = `calc(100vh - (${appHeaderHeight} + ${appFooterHeight}))`;

export const APP_SIZE = {
  header: appHeaderHeight,
  main: appMainHeight,
  footer: appFooterHeight,
};

// COLOURS
export const PRIMARY = {
  background: '#212121',
  colour: '#fff',
  hover: '#000',
};

export const SECONDARY = {
  background: '#000',
};
