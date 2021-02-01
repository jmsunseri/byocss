# BYOCSS (Bring Your Own CSS) Svelte Components

This Svelte component library is one that intends to be as unopinionated as possible when it comes to the style of your website. It lays a ground work for basic components and allows them to inherit from a style that you define in a JavaScript object. For these examples we will be using [TailwindCSS](https://tailwindcss.com/) class names but you could just as easily use any other css framework or write your own classes.

You start off by defining a theme file.

```javascript
const primaryButton = {
  style: {
    misc: 'btn focus:outline-none',
    background: 'bg-red-500 hover:bg-red-400',
    border: 'rounded-md boder-red-700',
    spacing: 'px-4 py-2',
    font: 'text-white',
    shadow: 'shadow-md',
  },
};

const theme = {
  buttons: {
    primary: {
      ...primaryButton,
      icon: {},
    },
    primaryDense: {
      ...primaryButton,
      spacing: 'p-1',
      icon: {},
    },
  },
};

export default theme;
```

In this example we defined two button styles, primary and primaryDense. In your app we can now do this.

```html
<button style="primary">I'm a Button</button>
<button style="primaryDense">I'm a Dense Button</button>
```

The structure of the primary or primaryDense button objects is not really consequential. So long as some point the object ends up being a string

```javascript
const theme = {
  buttons: {
    primary: {
      style:
        'btn focus:outline-none bg-red-500 hover:bg-red-400 rounded-md boder-red-700 px-4 py-2 text-white shadow-md',
    },
  },
};
```

or

```javascript
const theme = {
  buttons: {
    primary: {
      blah: [
        'btn',
        'focus:outline-none',
        'bg-red-500',
        'hover:bg-red-400',
        'rounded-md',
        'boder-red-700',
        'px-4',
        'py-2',
        'text-white',
        'shadow-md',
      ],
    },
  },
};
```

would accomplish the exact same thing. Whatever structure allows you organize your styles the best go with it. Each component will will look for predefined properties on the theme object to apply that theme to different portion of the component. In a button that predefined object my be `icon` so we can apply styles to an icon. In a card component it might look for `header`, `body`, and `footer` objects. Properties of the individual component TBD.

After you have defined a theme then you just need to set the context in your Svelte app;

```html
<script lang="ts">
  import { setContext } from 'svelte';
  import theme from '../byocss.config';
  setContext('byocss-theme', theme);
</script>
```

## Consuming Components

If you are using a bundler plugin like [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`dist/index.mjs`) and a UMD script (`dist/index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.

## Developing

Make your changes to components or add new components in the `src` directory.

```bash
yarn build
```

Then

```bash
cd site
yarn watch:tailwind
yarn dev
```

(yarn watch and yarn dev will have to be run in different terminals)

If you are adding a new component make sure to add a new svelte file in the `site\src\routes` folder and link to it from the `sites\src\routes\index.svelte` file.
