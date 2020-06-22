import theme, { Theme } from '../../chakra';

const customTheme = {
  ...theme,
  ...theme.breakpoints,
  breakpoints: ['36em', '48em', '62em', '80em'],
};

export default customTheme;
