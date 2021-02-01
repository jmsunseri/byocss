const toStyle = (theme: object | string): string => {
  if (typeof theme === 'string') {
    return theme.trim();
  } else {
    if (Array.isArray(theme)) {
      return theme
        .map((x) => toStyle(x))
        .join(' ')
        .trim();
    } else {
      return Object.keys(theme).reduce((styles: string, key: string) => {
        const type = typeof theme[key];
        switch (type) {
          case 'string':
            return `${styles} ${theme[key]}`.trim();
          case 'object':
            if (Array.isArray(theme[key])) {
              return `${styles} ${theme[key]
                .map((x) => toStyle(x))
                .join(' ')}`.trim();
            } else {
              return `${styles} ${toStyle(theme[key])}`.trim();
            }
          default:
            return styles;
        }
      }, '');
    }
  }
};

export { toStyle };
