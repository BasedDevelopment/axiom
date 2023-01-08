<script lang="ts">
  import '../../app.css';

  import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
  import Section from '$lib/components/sidebar/Section.svelte';
  import Action from '$lib/components/sidebar/Action.svelte';

  import { firstUpperCase } from '$lib/firstUpperCase';
  import { page } from '$app/stores';
  import type { PageData } from '../$types';

  $: activeUrl = $page.url.pathname;
  $: activeHash = $page.url.hash;

  export let data: PageData;
</script>

<Sidebar>
  <Section name="Dashboard">
    <Action href="/me" active={activeUrl === '/me'}>Home</Action>
  </Section>
  {#each data.boxes as box}
    <Section name={box.name}>
      {#each box.vms as server}
        <Action href="/me/{server.id}" active={false}>{firstUpperCase(server.name)}</Action>
        {#if activeUrl === `/me/${server.id}`}
          <Action sub href="/me/{server.id}" active={activeHash !== '#statistics'}>
            Console
          </Action>
          <Action sub href="/me/{server.id}#statistics" active={activeHash === '#statistics'}>
            Statistics
          </Action>
        {/if}
      {/each}
    </Section>
  {/each}
</Sidebar>

<div class="w-full p-5 dark:bg-slate-900 dark:text-white">
  <div class="w-4/5 mx-auto">
    <slot />
  </div>
</div>
