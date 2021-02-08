<script lang="ts">
  import PageHeader from './PageHeader.svelte';
  import PropsTable from './PropsTable.svelte';
  import type { IProp } from './PropsTable.svelte';
  import SlotsTable from './SlotsTable.svelte';
  import type { ISlot } from './SlotsTable.svelte';

  export let props: IProp[] = [];
  export let slots: ISlot[] = [];
  export let description: string = '';
  export let componentName: string = '';
</script>

<div class="flex flex-col w-full gap-3">
  <PageHeader>{componentName}</PageHeader>
  {description}
  <slot name="examples" />
  <PropsTable {props} />
  <SlotsTable {slots} />
</div>
