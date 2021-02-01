<script lang="ts">
  import { getContext } from 'svelte';
  import type { IButtonTheme, ITheme } from './models';
  import { toStyle } from './utils';
  const theme: ITheme = getContext('byocss-theme');
  export let style: string = 'primary';
  export let css: string = '';
  const buttonTheme: IButtonTheme = theme.buttons[style];
  let button: string = 'btn';
  let icon: string;

  $: {
    button = `${toStyle({
      ...buttonTheme,
      icon: undefined,
    })} ${css}`;
    icon = toStyle(buttonTheme.icon);
  }
</script>

<button class={button} on:click>
  {#if $$slots.icon}
    <div class={icon}>
      <slot name="icon" />
    </div>
  {/if}
  <slot />
  {#if $$slots.trailingIcon}
    <div class={icon}>
      <slot name="trailingIcon" />
    </div>
  {/if}
</button>
