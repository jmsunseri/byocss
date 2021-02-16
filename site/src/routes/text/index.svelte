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
        'This defines which variant of the text component from your theme configuration will be applied.',
    },
    {
      name: 'css',
      type: 'string',
      description:
        'Extra css classes you would like to have applied to the text component.',
    },
  ];

  let slots: ISlot[] = [
    {
      description: 'Will be placed inside text span element',
    },
  ];

  let themeProps: IThemeProps[] = [
    {
      name: 'style',
      type: 'string | object',
      description: `The name of this prop could be anything.   
      It can be a single string containing all styles applied to the button or 
      it can be an object broken up in to multiple props.`,
    },
  ];

  let exampleHTML: string = `<div class="flex flex-col gap-3">
  <Text variant="example-header">Header</Text>
  <Text variant="example-caption">Caption</Text>
  <Text variant="example-code">let foo = 1;</Text>
</div>`;

  let exampleTheme = `const theme: ITheme = {
  texts: {
    'example-header': 'text-4xl font-bold',
    'example-caption': 'text-xs',
    'example-code': 'rounded-md bg-blue-800 flex flex-col font-mono p-1 whitespace-pre text-red-50',
  }
};

`;
</script>

<ComponentPage
  {props}
  {slots}
  {themeProps}
  description="The allows to apply predefined styles to text."
  componentName="Text"
>
  <div slot="examples" class="flex flex-col gap-3">
    <Example />
    <CodeExample {exampleHTML} {exampleTheme} />
  </div>
</ComponentPage>
