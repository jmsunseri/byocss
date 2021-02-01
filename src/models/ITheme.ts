import type { IButtonTheme } from './IButtonTheme';

interface ITheme {
  buttons: { [key: string]: IButtonTheme };
}

export type { ITheme };
