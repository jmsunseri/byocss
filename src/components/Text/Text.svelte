<script context="module" lang="ts">
  import { theme as themeStore } from '../../store';
  import { toStyle } from '../../utils';
  type TextCollection = {
    [key: string]: string;
  };

  let texts: TextCollection;

  themeStore.subscribe((theme) => {
    if (theme.texts) {
      texts = Object.keys(theme.texts).reduce(
        (current: TextCollection, key: string) => ({
          ...current,
          [key]: toStyle(theme.texts[key]),
        }),
        {}
      );
    }
  });
</script>

<script lang="ts">
  export let style: string = 'default';
  export let css: string = '';
  let text: string = '';
  $: {
    text = texts[style] || '';
  }
</script>

<span class={`${text} ${css}`.trim()}>
  <slot />
</span>
