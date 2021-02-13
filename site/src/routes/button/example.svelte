<script lang="ts">
  import { Button } from 'byocss';
  import { DeviceFloppy, Trash } from 'tabler-icons-svelte';
</script>

<div class="flex flex-row gap-3">
  <Button variant="example-default">No Icon</Button>
  <Button variant="example-alt">
    Save
    <span slot="trailingIcon">
      <DeviceFloppy size="1.5rem" />
    </span>
  </Button>
  <Button disabled variant="example-disabled">Disabled</Button>
  <div class="flex flex-col justify-end">
    <Button variant="example-dense">
      Dense
      <span slot="icon">
        <Trash size="1.5rem" />
      </span>
    </Button>
  </div>
</div>
