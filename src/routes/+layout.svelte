<script lang="ts">
  import '../app.css';

  import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
  import Section from '$lib/components/sidebar/Section.svelte';
  import Action from '$lib/components/sidebar/Action.svelte';
  import SubAction from '$lib/components/sidebar/SubAction.svelte';
  import Navbar from '$lib/components/sidebar/Navbar.svelte';

  import { page } from '$app/stores';
  import { firstUpperCase } from '$lib/firstUpperCase';
  import theme from '$lib/shared/stores/theme';
  import type { PageData } from './$types';

  $: activeUrl = $page.url.pathname;
  $: activeHash = $page.url.hash;

  function isDark() {
    if (import.meta.env.SSR) {
      return false;
    }

    return $theme === 'dark' || ($theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  theme.subscribe(() => {
    currentTheme = isDark() ? 'dark' : '';
  })

  $: currentTheme = isDark() ? 'dark' : '';

  export let data: PageData;
</script>

<svelte:head>
  <title>Vixen</title>
  <meta name="description" content="Web interface for Eve">
</svelte:head>

<main class="min-h-screen w-full {currentTheme}">
  <Navbar />

  <div class="flex h-full" style="min-height: 93.3vh;">
    <div id="sidebar-container">
      <Sidebar>
        <Section name="Dashboard">
          <Action href="/" active={activeUrl === '/'}>Home</Action>
        </Section>
        {#each data.boxes as box}
          <Section name={box.name}>
            {#each box.vms as server}
              <Action href="/{server.id}" active={false}>{firstUpperCase(server.name)}</Action>
              {#if activeUrl === `/${server.id}`}
                <SubAction href="/{server.id}" active={activeHash !== '#statistics'}
                  >Console</SubAction
                >
                <SubAction href="/{server.id}#statistics" active={activeHash === '#statistics'}
                  >Statistics</SubAction
                >
              {/if}
            {/each}
          </Section>
        {/each}
      </Sidebar>
    </div>

    <div class="w-full p-5">
      <div class="w-4/5 mx-auto">
        <slot />
      </div>
    </div>
  </div>
</main>
