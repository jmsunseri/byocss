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
        'This defines which variant of the link button component from your theme configuration will be applied.',
    },
    {
      name: 'css',
      type: 'string',
      description:
        'Extra css classes you would like to have applied to the main link button component.',
    },
    {
      name: 'href',
      type: 'string',
      description: 'Hyperlink reference.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description:
        'Will prevent the link from navigating you to the href.  When disabled the component will look for a variant either called "{variant}-disabled" or "disabled"',
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
      description:
        'An icon that will be placed on the left of the link button.',
    },
    {
      name: 'trailingIcon',
      description:
        'An icon that will be placed on the right side of the link button.',
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
      It can be a single string containing all styles applied to the link button or 
      it can be an object broken up in to multiple props.`,
    },
  ];

  let exampleHTML: string = `<div class="flex flex-row gap-3">
  <LinkButton variant="example-default" href="./link-button">A Link</LinkButton>
  <LinkButton variant="example-default" href="./link-button">
    <span slot="icon">
      <BrandGithub size="1.5rem" />
    </span>
  </LinkButton>
  <LinkButton variant="example-default" href="./link-button">
    Notifications
    <span slot="trailingIcon">
      <Bell size="1.5rem" />
    </span>
  </LinkButton>
  <LinkButton disabled variant="example-default" href="./link-button">Disabled</LinkButton>
</div>`;

  let exampleTheme = `linkButtons: {
  'example-default': {
    style: 'text-blue-500 hover:bg-blue-300 flex flex-row gap-1',
  },
  'example-default-disabled': { style: 'text-gray-300 cursor-not-allowed' },
}`;
</script>

<ComponentPage
  {props}
  {slots}
  {themeProps}
  description="The link button allows the user to navigate to another page on the web."
  componentName="Link Button"
>
  <div slot="examples" class="flex flex-col gap-3">
    <Example />
    <CodeExample {exampleHTML} {exampleTheme} />
  </div>
</ComponentPage>
