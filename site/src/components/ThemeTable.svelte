<script context="module" lang="ts">
  export interface IThemeProps {
    name?: string;
    type?: string;
    description: string;
  }
</script>

<script lang="ts">
  import { Text } from 'byocss';
  export let themeProps: IThemeProps[] = [];
</script>

<div class="flex flex-col">
  <Text variant="subHeader">Theme</Text>
  <div class="grid grid-cols-1 divide-y divide-gray-300">
    <div class="grid grid-cols-5">
      <div class="text-lg font-semibold">Name</div>
      <div class="text-lg font-semibold">Type</div>
      <div class="col-span-3 text-lg font-semibold">Description</div>
    </div>

    {#each themeProps as prop}
      <div class="grid grid-cols-5 py-2">
        <code>{prop.name || ''}</code>
        <code>{prop.type || ''}</code>
        <div class="col-span-3">{prop.description}</div>
      </div>
    {/each}
  </div>
</div>
