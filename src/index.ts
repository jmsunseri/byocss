import type { ITextTheme, IButtonTheme, ILinkButtonTheme } from './components';
import { Button, LinkButton, Text } from './components';
import type { ITheme } from './models';

import { theme } from './store';
export type { ITheme, IButtonTheme, ILinkButtonTheme, ITextTheme };
export { Button, theme, LinkButton, Text };
