<script lang="ts">
  import Example from './example.svelte';
  import ComponentPage from '../../components/ComponentPage.svelte';
  import type { IProp } from '../../components/PropsTable.svelte';
  import type { ISlot } from '../../components/SlotsTable.svelte';
  import CodeExample from '../../components/CodeExample.svelte';
  import type { IThemeProps } from '../../components/ThemeTable.svelte';

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

  let themeProps: IThemeProps[] = [
    {
      name: 'icon',
      type: 'string | object',
      description: `It can be a single string containing all styles applied to the icon or 
      it can be an object broken up in to multiple props.`,
    },
    {
      name: 'style',
      type: 'string | object',
      description: `The name of this prop could be anything other than "icon".  
      It can be a single string containing all styles applied to the button or 
      it can be an object broken up in to multiple props.`,
    },
  ];

  let exampleHTML: string = `<div class="flex flex-row gap-3">
  <Button variant="example-default" on:click={() => alert('Clicked')}
    >No Icon</Button
  >
  <Button variant="example-alt">
    Save
    <span slot="trailingIcon">
      <DeviceFloppy size="1.5rem" />
    </span>
  </Button>
  <Button disabled variant="example-disabled" on:click={() => alert('Clicked')}
    >Disabled</Button
  >
  <div class="flex flex-col justify-end">
    <Button variant="example-dense">
      Dense
      <span slot="icon">
        <Trash size="1.5rem" />
      </span>
    </Button>
  </div>
</div>`;

  let exampleTheme = `const examplePrimaryButton = {
  misc: 'btn focus:outline-none flex flex-row gap-1 items-center',
  background: 'bg-blue-500 hover:bg-blue-400',
  border: 'rounded-md boder-blue-700',
  spacing: 'px-4 py-2',
  font: 'text-white',
  shadow: 'shadow-md',
};

const theme: ITheme = {
  buttons: {
    'example-default': {
      style: {
        ...examplePrimaryButton,
      },
    },
    'example-alt': {
      style: {
        ...examplePrimaryButton,
        font: 'text-gray-700 hover:text-gray-400',
        background: 'bg-gray-100',
      },
    },
    'example-disabled': {
      style: {
        ...examplePrimaryButton,
        background: 'bg-gray-400',
        font: 'text-gray-300',
        snadow: 'shadow-none',
      },
    },
    'example-dense': {
      style: {
        ...examplePrimaryButton,
        spacing: 'p-1',
      },
    },
  },
};

`;
</script>

<ComponentPage
  {props}
  {slots}
  {themeProps}
  description="The button allows the user to preform an action or make a selection."
  componentName="Button"
>
  <div slot="examples" class="flex flex-col gap-3">
    <Example />
    <CodeExample {exampleHTML} {exampleTheme} />
  </div>
</ComponentPage>
