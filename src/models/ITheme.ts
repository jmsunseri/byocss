import type { IButtonTheme } from '../components/Button/IButtonTheme';
import type { ILinkButtonTheme } from '../components/LinkButton/ILinkButtonTheme';

interface ITheme {
  buttons?: { [key: string]: IButtonTheme };
  linkButtons?: { [key: string]: ILinkButtonTheme };
}

export type { ITheme };
