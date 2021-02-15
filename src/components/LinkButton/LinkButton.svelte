<script lang="ts" context="module">
  import { theme as themeStore } from '../../store';
  import { toStyle } from '../../utils';
  type LinkButtonCollection = {
    [key: string]: { style: string; icon: string };
  };

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
  export let variant: string = 'default';
  export let css: string = '';
  export let href: string = '';
  export let disabled: boolean = false;
  export let sapperNoScroll: boolean = false;
  let linkButton: string = '';
  let icon: string = '';

  $: {
    linkButton = linkButtons[variant]?.style || '';
    icon = linkButton[variant]?.icon || '';
  }
</script>

{#if !sapperNoScroll}
  <a {href} on:click {disabled} class={`${linkButton} ${css}`.trim()}>
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
  <a
    {href}
    on:click
    sapper:noscroll
    {disabled}
    class={`${linkButton} ${css}`.trim()}
  >
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
