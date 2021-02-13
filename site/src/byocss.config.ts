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

const examplePrimaryButton = {
  misc: 'btn focus:outline-none flex flex-row gap-1 items-center',
  background: 'bg-blue-500 hover:bg-blue-400',
  border: 'rounded-md boder-blue-700',
  spacing: 'px-4 py-2',
  font: 'text-white',
  shadow: 'shadow-md',
};

const theme: ITheme = {
  buttons: {
    'example-default': {
      style: {
        ...examplePrimaryButton,
      },
    },
    'example-alt': {
      style: {
        ...examplePrimaryButton,
        font: 'text-gray-700 hover:text-gray-400',
        background: 'bg-gray-100',
      },
    },
    'example-disabled': {
      style: {
        ...examplePrimaryButton,
        background: 'bg-gray-400',
        font: 'text-gray-300',
        snadow: 'shadow-none',
      },
    },
    'example-dense': {
      style: {
        ...examplePrimaryButton,
        spacing: 'p-1',
      },
    },
    default: {
      ...primaryButton,
      icon: {},
    },
    flat: {
      style: 'btn focus:outline-none hover:text-blue-500',
    },
    'flat-active': {
      style: 'btn focus:outline-none text-green-500',
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
    caption: 'text-xs text-gray-500',
  },
};

export default theme;
