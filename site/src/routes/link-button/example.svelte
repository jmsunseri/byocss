<script lang="ts">
  import { LinkButton } from 'byocss';
  import { Bell, BrandGithub } from 'tabler-icons-svelte';
</script>

<div class="flex flex-row gap-3">
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
  <LinkButton disabled variant="example-default" href="./link-button"
    >Disabled</LinkButton
  >
</div>
