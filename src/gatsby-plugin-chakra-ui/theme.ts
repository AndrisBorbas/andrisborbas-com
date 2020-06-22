import theme, { Theme } from '@chakra-ui/theem';

const customTheme = {
  ...theme,
  ...theme.breakpoints,
  breakpoints: ['36em', '48em', '62em', '80em'],
};

export default customTheme;
