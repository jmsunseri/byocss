<script lang="ts">
  import { Button } from 'byocss';
  import { DeviceFloppy, Trash } from 'tabler-icons-svelte';
</script>

<div class="flex flex-row gap-3">
  <Button>No Icon</Button>
  <Button>
    Save
    <span slot="trailingIcon">
      <DeviceFloppy size="1.5rem" />
    </span>
  </Button>
  <Button>
    Delete
    <span slot="icon">
      <Trash size="1.5rem" />
    </span>
  </Button>
  <Button disabled variant="disabled">Disabled</Button>
</div>
