<script lang="ts">
  import '../../app.css';

  import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
  import Section from '$lib/components/sidebar/Section.svelte';
  import Action from '$lib/components/sidebar/Action.svelte';

  import { page } from '$app/stores';
  import type { Container, User } from '$lib/data';

  $: activeUrl = $page.url.pathname;
  $: activeHash = $page.url.hash;

  export let data: {
    authenticated: boolean;
    containers: Container[];
    user: User;
  };
</script>

<Sidebar>
  <Section name="Dashboard">
    <Action href="/me" active={activeUrl === '/me'}>Home</Action>
  </Section>
  <Section name="Containers">
    {#each data.containers as container}
      <Action href="/me/{container.vm.id}" active={false}>{container.vm.hostname}</Action>
      {#if activeUrl === `/me/${container.vm.id}`}
        <Action sub href="/me/{container.vm.id}" active={activeHash !== '#statistics'}
          >Console</Action
        >
        <Action sub href="/me/{container.vm.id}#statistics" active={activeHash === '#statistics'}>
          Statistics
        </Action>
      {/if}
    {/each}
  </Section>
</Sidebar>

<div class="w-full p-5 dark:bg-slate-900 dark:text-white">
  <div class="w-4/5 mx-auto">
    <slot />
  </div>
</div>
