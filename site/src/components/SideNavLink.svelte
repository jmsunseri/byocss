<script lang="ts">
  import { LinkButton } from 'byocss';
  import { stores } from '@sapper/app';
  const { page } = stores();

  export let path = '';
  export let label = '';
</script>

<LinkButton
  href={`./${path}`}
  variant={$page.path === `/${path}` ? 'active' : 'default'}
>
  {label}
</LinkButton>
