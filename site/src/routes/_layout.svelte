<script context="module" lang="ts">
  import { theme as themeStore, LinkButton } from 'byocss';
  import theme from '../byocss.config';
  themeStore.set(theme);
</script>

<script lang="ts">
  import { stores } from '@sapper/app';
  const { page } = stores();
</script>

<!--TODO Create Nav control for consumption here-->
<div
  class="shadow px-8 py-2 flex flex-row text-2xl justify-between sticky top-0 bg-white"
>
  BYOCSS (Bring Your Own CSS) Svelte Components
</div>

<div class="h-screen flex flex-row">
  <div class="w-80 text-white md:flex hidden bg-gray-600 p-4 flex-col">
    Components:
    <div class="flex flex-col pl-4">
      <LinkButton
        href="/button"
        variant={$page.path === '/button' ? 'active' : 'default'}
        >Button</LinkButton
      >
      <LinkButton
        href="/link-button"
        variant={$page.path === '/link-button' ? 'active' : 'default'}
        >Link Button</LinkButton
      >
    </div>
  </div>
  <div class="w-full pl-4 py-4 h-full overflow-y-hidden">
    <slot />
  </div>
</div>

<!--TODO Create Nav control for consumption here-->
<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
