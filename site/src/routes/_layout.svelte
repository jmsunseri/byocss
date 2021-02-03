<script context="module" lang="ts">
  import { theme as themeStore } from 'byocss';
  import theme from '../byocss.config';
  console.log('setting theme in store', theme);
  themeStore.set(theme);
</script>

<!--TODO Create Nav control for consumption here-->
<div
  class="shadow px-8 py-2 flex flex-row text-2xl justify-between sticky top-0 bg-white"
>
  BYOCSS (Bring Your Own CSS) Svelte Components
</div>

<div class="grid grid-cols-12 h-screen">
  <div
    class="col-span-0 md:col-span-2 text-white md:visible invisible bg-gray-600 p-4 flex flex-col"
  >
    Components:
    <div class="flex flex-col gap-4 pl-4">
      <!-- TODO Create link button control for consumption here -->
      <a href="/button" class="text-green-300"> Button</a>
    </div>
  </div>
  <div class="md:col-span-10 col-span-12 p-4">
    <main>
      <slot />
    </main>
  </div>
</div>

<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
