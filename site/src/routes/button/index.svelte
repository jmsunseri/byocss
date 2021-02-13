<script lang="ts">
  import Example from './example.svelte';
  import ComponentPage from '../../components/ComponentPage.svelte';
  import type { IProp } from '../../components/PropsTable.svelte';
  import type { ISlot } from '../../components/SlotsTable.svelte';

  let props: IProp[] = [
    {
      name: 'variant',
      type: 'string',
      default: "'default'",
      description:
        'This defines which variant of the button component from your theme configuration will be applied.',
    },
    {
      name: 'css',
      type: 'string',
      description:
        'Extra css classes you would like to have applied to the main button component.',
    },
    {
      name: 'on:click',
      type: 'VoidFunction',
      description: 'A function that will be called on click of the button.',
    },
  ];

  let slots: ISlot[] = [
    {
      description:
        'This will be placed to the right of an icon (if provided) and to the left of a tailing icon (if provided).',
    },
    {
      name: 'icon',
      description: 'An icon that will be placed on the left of the button.',
    },
    {
      name: 'trailingIcon',
      description:
        'An icon that will be placed on the right side of the button.',
    },
  ];

  let example: string = `import { Button } from 'byocss';
import { DeviceFloppy, Trash } from 'tabler-icons-svelte';

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
</div>`;
</script>

<ComponentPage
  {props}
  {slots}
  description="The button allows the user to preform an action or make a selection."
  componentName="Button"
>
  <div slot="examples" class="flex flex-col gap-3">
    <Example />
    <pre
      class="border-gray-300 rounded-md border bg-gray-100 p-4">
      <code>
      {example}
      </code>
    </pre>
  </div>
</ComponentPage>
