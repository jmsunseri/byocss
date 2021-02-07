import type { ITheme } from './models';
import { Button } from './components/Button';
import type { IButtonTheme } from './components/Button';
import type { ILinkButtonTheme } from './components/LinkButton';
import { LinkButton } from './components/LinkButton';
import { theme } from './store';
export type { ITheme, IButtonTheme, ILinkButtonTheme };
export { Button, theme, LinkButton };
