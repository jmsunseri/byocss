import { writable } from 'svelte/store';
import type { ITheme } from './models';
export const theme = writable<ITheme>({ buttons: {}, linkButtons: {} });
