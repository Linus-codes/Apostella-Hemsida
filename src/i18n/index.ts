import { en } from './en';
import { sv } from './sv';
import type { Strings } from './en';
import type { Lang } from './routes';

export const strings: Record<Lang, Strings> = { en, sv };
export type { Strings, Lang };
