<script context="module" lang="ts">
  import { theme as themeStore } from '../../store';
  import { toStyle } from '../../utils';
  type LinkButtonCollection = {
    [key: string]: { style: string; icon: string };
  };

  // according to the documentation this module will only be evaluated once when the component is initialized
  // and not each time the component is rendered.  this seems ideal for loading the theme so long as we don't
  // want to enable hot swapping themes for the time being if someone wants to have multiple themes they can define
  // multiple style buttons once for each theme instead of compeletly new theme structures

  let linkButtons: LinkButtonCollection;

  themeStore.subscribe((theme) => {
    if (theme.linkButtons) {
      linkButtons = Object.keys(theme.linkButtons).reduce(
        (current: LinkButtonCollection, key: string) => ({
          ...current,
          [key]: {
            style: toStyle({
              ...theme.linkButtons[key],
              icon: undefined,
            }),
            icon: toStyle(theme.linkButtons[key].icon),
          },
        }),
        {}
      );
    }
  });
</script>

<script lang="ts">
  export let style: string = 'default';
  export let css: string = '';
  export let href: string = '';
  export let disabled: boolean = false;
  export let sapperNoScroll: boolean = false;
  let linkButton: string = '';
  let icon: string = '';

  $: {
    linkButton = linkButtons[style]?.style || '';
    icon = linkButton[style]?.icon || '';
  }
</script>

{#if !sapperNoScroll}
  <a {href} on:click {disabled} class={linkButton}>
    {#if $$slots.icon}
      <span class={icon}>
        <slot name="icon" />
      </span>
    {/if}
    <slot />
    {#if $$slots.trailingIcon}
      <span class={icon}>
        <slot name="trailingIcon" />
      </span>
    {/if}
  </a>
{:else}
  <a {href} on:click sapper:noscroll {disabled} class={linkButton}>
    {#if $$slots.icon}
      <span class={icon}>
        <slot name="icon" />
      </span>
    {/if}
    <slot />
    {#if $$slots.trailingIcon}
      <span class={icon}>
        <slot name="trailingIcon" />
      </span>
    {/if}
  </a>
{/if}
