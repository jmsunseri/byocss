<script lang="ts">
  import { Button, Text } from 'byocss';
</script>

<div class="container mx-auto flex flex-col gap-3 pr-4">
  <Text>
    Hi there welcome to BYOCSS Svelte component library. The goal of this
    project is to provide you with a functional set of components that allows
    you to style them as you see fit using any means necessary. This website
    uses tailwind but you are free to use any css library or define your own
    classes. Then you use a json config file to inject those classes into the
    templates.
  </Text>

  <Text>
    In the case of the button below we defined a javascript object and populated
    it with Tailwind CSS classes.
  </Text>

  <Text variant="code-block">
    {`const theme = {
    buttons: {
      default: {
        style: {
          misc: 'btn focus:outline-none',
          background: 'bg-red-500 hover:bg-red-400',
          border: 'rounded-md border-red-700 border-2',
          spacing: 'px-4 py-2',
          font: 'text-white',
          shadow: 'shadow-md',
        },
        icon: {},
      },
    },
  };`}
  </Text>

  <Text>
    The component library cares that you defined a buttons object and it cares
    that you defined an icon property. The icon property will be used if you put
    an icon in the icon slot of the component. If you don't like this structure
    that's ok you could just as easily do this.
  </Text>

  <Text variant="code-block">
    {`const theme = {
  buttons: {
    default: {
      style: 'btn focus:outline-none bg-red-500 hover:bg-red-400 rounded-md border-red-700 border-2 px-4 py-2 text-white shadow-md',
      icon: {}
    },
  },
};`}
  </Text>

  <Text>
    It doesn't matter. It will take the classes and apply them as needed to the
    component.
  </Text>
  <div>
    <Text variant="code-block">
      {`<Button variant="default" >I'm a Button</Button>`}
    </Text>
    <Text variant="caption">
      You don't need to apply the property <code>variant="default"</code> it will
      look for a default variant automatically.
    </Text>
  </div>
  <div class="flex">
    <Button variant="default">I'm a Button</Button>
  </div>
</div>
