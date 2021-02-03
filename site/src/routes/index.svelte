<script lang="ts">
  import { Button } from 'byocss';
</script>

<div class="container mx-auto flex flex-col gap-4">
  <p>
    Hi there welcome to BYOCSS Svelte component library. The goal of this
    project is to provide you with a functional set of components that allows
    you to style them as you see fit using any means necessary. This website
    uses tailwind but you are free to use any css library or define your own
    classes. Then you use a json config file to inject those classes into the
    templates
  </p>

  <p>
    In the case of the button below we defined a javascript object and populated
    it with Tailwind CSS class names.
  </p>

  <pre><code>
		{`const theme = {
			buttons: {
				primary: {
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
	</code></pre>

  <p>
    The component library cares that you defined a buttons object and it cares
    that you defined an icon property. The icon property will be used if you put
    an icon in the icon slot of the component. If you don't like this structure
    that's ok you could just as easily do this.
  </p>

  <pre><code>
		{`const theme = {
			buttons: {
				primary: {
					style: 'btn focus:outline-none bg-red-500 hover:bg-red-400 rounded-md border-red-700 border-2 px-4 py-2 text-white shadow-md',
					icon: {}
				},
			},
		};`}
	</code></pre>

  <p>
    It doesn't matter to me. I will take the classes and apply them as needed to
    the component
  </p>

  <pre>
		<code>
			{`<Button style="default" >I'm a Button</Button>`}
		</code>
	</pre>

  <div class="flex">
    <Button style="default">I'm a Button</Button>
  </div>
</div>
