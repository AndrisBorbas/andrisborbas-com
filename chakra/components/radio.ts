import { ComponentTheme } from '@chakra-ui/theme-tools';

import Checkbox, { CheckboxSizes } from './checkbox';

const baseStyle = Checkbox.baseStyle as any;

const Radio: ComponentTheme = {
  defaultProps: Checkbox.defaultProps,
  baseStyle: (props) => ({
    Control: {
      ...baseStyle(props).Control,
      borderRadius: 'full',
      _checked: {
        // eslint-disable-next-line no-underscore-dangle
        ...baseStyle(props).Control._checked,
        _before: {
          content: `""`,
          display: 'inline-block',
          position: 'relative',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          bg: 'currentColor',
        },
      },
    },
    Label: baseStyle(props).Label,
  }),
  sizes: {
    ...Checkbox.sizes,
    sm: {
      Control: {
        width: 3,
        height: 3,
      },
    },
  },
};

export const RadioSizes = CheckboxSizes;

export default Radio;
