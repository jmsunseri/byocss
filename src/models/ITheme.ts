import type { IButtonTheme } from '../components/Button/IButtonTheme';
import type { ILinkButtonTheme } from '../components/LinkButton';
import type { ITextTheme } from '../components/Text';

interface ITheme {
  buttons?: {
    default: IButtonTheme;
    [key: string]: IButtonTheme;
  };
  linkButtons?: {
    default: ILinkButtonTheme;
    [key: string]: ILinkButtonTheme;
  };
  texts?: {
    default: string | object;
    [key: string]: string | object;
  };
}

export type { ITheme };
