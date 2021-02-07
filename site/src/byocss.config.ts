import type { ITheme } from 'byocss';

const primaryButton = {
  style: {
    misc: 'btn focus:outline-none',
    background: 'bg-red-500 hover:bg-red-400',
    border: 'rounded-md boder-red-700',
    spacing: 'px-4 py-2',
    font: 'text-white',
    shadow: 'shadow-md',
  },
};

const theme: ITheme = {
  buttons: {
    default: {
      ...primaryButton,
      icon: {},
    },
    dense: {
      ...primaryButton,
      spacing: 'p-1',
      icon: {},
    },
  },
  linkButtons: {
    default: { style: 'text-white hover:text-green-300' },
    active: { style: 'text-green-300' },
  },
};

export default theme;
