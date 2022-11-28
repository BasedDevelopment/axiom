<script lang="ts">
  import '../app.css';

  import Action from '$lib/components/Action.svelte';
  import SubAction from '$lib/components/SubAction.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Section from '$lib/components/Section.svelte';

  import { page } from '$app/stores';
  import type { PageData } from './$types';

  function firstUpperCase(str: string) {
    const firstLetter = str.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = str.slice(1);

    return firstLetterCap + remainingLetters;
  }

  $: activeUrl = $page.url.pathname;
  $: activeHash = $page.url.hash;

  export let data: PageData;
</script>

<svelte:head>
  <title>Vixen</title>
  <meta name="description" content="Web interface for Eve">
</svelte:head>

<div class="grid grid-cols-12 gap-3">
  <div class="col-span-2 md:flex flex-col md:flex-row md:min-h-screen w-full">
    <Sidebar>
      <Section name="Dashboard">
        <Action href="/" active={activeUrl === '/'}>Home</Action>
      </Section>
      {#each data.boxes as box}
        <Section name={box.name}>
          {#each box.vms as server}
            <Action href="/{server.id}#console" active={false}>{firstUpperCase(server.name)}</Action>
            {#if activeUrl === `/${server.id}`}
              <SubAction href="/{server.id}#console" active={activeHash !== '#statistics'}>Console</SubAction>
              <SubAction href="/{server.id}#statistics" active={activeHash === '#statistics'}>Statistics</SubAction>
            {/if}
          {/each}
        </Section>
      {/each}
    </Sidebar>
  </div>
  <div class="col-span-10 py-5 mx-auto w-4/5">
    <slot />
  </div>
</div>
