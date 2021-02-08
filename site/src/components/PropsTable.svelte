<script context="module" lang="ts">
  export interface IProp {
    name: string;
    type: string;
    default?: string;
    description: string;
  }
</script>

<script lang="ts">
  import { Text } from 'byocss';
  export let props: IProp[] = [];
</script>

<div class="flex flex-col">
  <Text style="subHeader">Props</Text>
  <div class="grid grid-cols-1 divide-y divide-gray-300">
    <div class="grid grid-cols-5">
      <div class="text-lg font-semibold">Name</div>
      <div class="text-lg font-semibold">Type</div>
      <div class="text-lg font-semibold">Default</div>
      <div class="col-span-2 text-lg font-semibold">Description</div>
    </div>

    {#each props as prop}
      <div class="grid grid-cols-5 py-2 ">
        <code>{prop.name}</code>
        <code>{prop.type}</code>
        <code>{prop.default || ''}</code>
        <div class="col-span-2">{prop.description}</div>
      </div>
    {/each}
  </div>
</div>
