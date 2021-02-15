const toStyle = (theme?: object | string): string => {
  if (!theme) {
    return '';
  } else if (typeof theme === 'string') {
    return theme.trim();
  } else {
    if (Array.isArray(theme)) {
      return theme
        .map((x) => toStyle(x))
        .join(' ')
        .trim();
    } else {
      return Object.keys(theme)
        .reduce((styles: string, key: string) => {
          const type = typeof theme[key];
          switch (type) {
            case 'string':
              return `${styles} ${theme[key].trim()}`;
            case 'object':
              if (Array.isArray(theme[key])) {
                return `${styles} ${theme[key]
                  .map((x) => toStyle(x))
                  .join(' ')}`;
              } else {
                return `${styles} ${toStyle(theme[key])}`;
              }
            default:
              return styles;
          }
        }, '')
        .trim();
    }
  }
};

const getDisabledVariant = (
  themeCollection: { [key: string]: object },
  variant: string
): any => {
  if (themeCollection[`${variant}-disabled`]) {
    return themeCollection[`${variant}-disabled`];
  } else if (themeCollection['disabled']) {
    return themeCollection['disabled'];
  } else {
    return themeCollection[variant];
  }
};

export { toStyle, getDisabledVariant };
