<script context="module" lang="ts">
  export interface ISlot {
    name?: string;
    description: string;
  }
</script>

<script lang="ts">
  import { Text } from 'byocss';
  export let slots: ISlot[] = [];
</script>

<div class="flex flex-col">
  <Text variant="subHeader">Slots</Text>
  <div class="grid grid-cols-1 divide-y divide-gray-300">
    <div class="grid grid-cols-5">
      <div class="text-lg font-semibold">Name</div>
      <div class="col-span-4 text-lg font-semibold">Description</div>
    </div>

    {#each slots as slot}
      <div class="grid grid-cols-5 py-2">
        <code>{slot.name || ''}</code>
        <div class="col-span-4">{slot.description}</div>
      </div>
    {/each}
  </div>
</div>
