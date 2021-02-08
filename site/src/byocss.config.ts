import type { ITheme } from 'byocss';

const primaryButton = {
  style: {
    misc: 'btn focus:outline-none flex flex-row gap-1 items-center',
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
    disabled: {
      style: {
        ...primaryButton.style,
        background: 'bg-gray-400',
        font: 'text-gray-300',
        snadow: 'shadow-none',
      },
      icon: {},
    },
    dense: {
      ...primaryButton,
      spacing: 'p-1',
      icon: {},
    },
  },
  linkButtons: {
    default: { style: 'text-white hover:text-blue-300' },
    active: { style: 'text-green-300' },
  },
  texts: {
    default: '',
    header: 'text-4xl font-semibold text-gray-500',
    subHeader: 'text-2xl font-semibold text-gray-500 my-3',
  },
};

export default theme;
