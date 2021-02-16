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
    'example-default-disabled': {
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
    header: { style: 'text-gray-700 hover:text-blue-400' },
    active: { style: 'text-green-300' },
    'example-default': {
      style: 'text-blue-500 hover:bg-blue-300 flex flex-row gap-1',
    },
    'example-default-disabled': { style: 'text-gray-300 cursor-not-allowed' },
  },
  texts: {
    default: 'text-gray-700',
    header: 'text-4xl font-semibold text-gray-500',
    subHeader: 'text-2xl font-semibold text-gray-500 my-3',
    caption: 'text-xs text-gray-500',
    'code-block':
      'border-gray-300 rounded-md border bg-gray-100 flex flex-col font-mono p-2 whitespace-pre overflow-auto',
    'example-header': 'text-4xl font-bold',
    'example-caption': 'text-xs',
    'example-code':
      'rounded-md bg-blue-800 flex flex-col font-mono p-1 whitespace-pre text-red-50',
  },
};

export default theme;
