<script lang="ts">
  import { Text, Button } from 'byocss';

  export let exampleHTML: string = '';
  export let exampleTheme: string = '';

  let isHtml: boolean = true;
</script>

<div class="flex flex-col">
  <Text variant="caption">This example uses TailwindCSS</Text>
  <code class="border-gray-300 rounded-md border bg-gray-100 flex flex-col">
    <pre
      class="max-h-96 overflow-y-auto p-2">
      {#if isHtml}
        {exampleHTML}
      {:else}
        {exampleTheme}
      {/if}
      
    </pre>
  </code>
  <div class="flex flex-row justify-end gap-3">
    <Button
      on:click={() => (isHtml = true)}
      variant={isHtml ? 'flat-active' : 'flat'}>HTML</Button
    >
    <Button
      on:click={() => (isHtml = false)}
      variant={!isHtml ? 'flat-active' : 'flat'}>Config</Button
    >
  </div>
</div>
