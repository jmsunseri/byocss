<script context="module" lang="ts">
  import { theme as themeStore } from '../../store';
  import { toStyle } from '../../utils';
  type ButtonCollection = { [key: string]: { style: string; icon: string } };

  // according to the documentation this module will only be evaluated once when the component is initialized
  // and not each time the component is rendered.  this seems ideal for loading the theme so long as we don't
  // want to enable hot swapping themes for the time being if someone wants to have multiple themes they can define
  // multiple style buttons once for each theme instead of compeletly new theme structures

  let buttons: ButtonCollection;

  themeStore.subscribe((theme) => {
    buttons = Object.keys(theme.buttons).reduce(
      (current: ButtonCollection, key: string) => ({
        ...current,
        [key]: {
          style: toStyle({ ...theme.buttons[key], icon: undefined }),
          icon: toStyle(theme.buttons[key].icon),
        },
      }),
      {}
    );
  });
</script>

<script lang="ts">
  export let variant: string = 'default';
  export let css: string = '';
  export let disabled: boolean = false;
  let button: string = '';
  let icon: string = '';
  $: {
    button = buttons[variant]?.style || '';
    icon = buttons[variant]?.icon || '';
  }
</script>

<button
  type="submit"
  data-testid="button"
  class={`${button} ${css}`.trim()}
  {disabled}
  on:click
>
  {#if $$slots.icon}
    <span data-testid="button-icon" class={icon}>
      <slot name="icon" />
    </span>
  {/if}
  <slot />
  {#if $$slots.trailingIcon}
    <span data-testid="button-trailing-icon" class={icon}>
      <slot name="trailingIcon" />
    </span>
  {/if}
</button>
