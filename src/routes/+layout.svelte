<script lang="ts">
  import '../app.css';

  import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
  import Section from '$lib/components/sidebar/Section.svelte';
  import Action from '$lib/components/sidebar/Action.svelte';
  import Navbar from '$lib/components/sidebar/Navbar.svelte';

  import { page } from '$app/stores';
  import { firstUpperCase } from '$lib/firstUpperCase';
  import theme from '$lib/shared/stores/theme';
  import type { PageData } from './$types';
  import { onMount } from 'svelte';
  import cookie from 'cookie';
  import Login from '$lib/components/login/Login.svelte';

  // Enable dark/colored mode
  function isDark() {
    if (import.meta.env.SSR) {
      return false;
    }

    return (
      $theme === 'dark' ||
      ($theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }

  // Store mode in store
  theme.subscribe(() => {
    currentTheme = isDark() ? 'dark' : '';
  });

  // Watch for changes of system color scheme
  onMount(() => {
    window.matchMedia('(prefers-color-scheme: dark)').onchange = () => {
      currentTheme = isDark() ? 'dark' : '';
    };
  });

  $: currentTheme = isDark() ? 'dark' : '';
  $: activeUrl = $page.url.pathname;
  $: activeHash = $page.url.hash;

  export let data: PageData;
  export let authenticated = false;
</script>

<svelte:head>
  <title>Vixen</title>
  <meta name="description" content="Web interface for Eve" />
</svelte:head>

<main class="min-h-screen h-screen flex flex-col w-full {currentTheme}">
  <Login isOpen={!authenticated} />
  <Navbar />
  <div class="flex flex-grow">
    <div id="sidebar-container">
      <Sidebar>
        <Section name="Dashboard">
          <Action href="/" active={activeUrl === '/'}>Home</Action>
        </Section>
        {#if authenticated}
          {#each data.boxes as box}
            <Section name={box.name}>
              {#each box.vms as server}
                <Action href="/{server.id}" active={false}>{firstUpperCase(server.name)}</Action>
                {#if activeUrl === `/${server.id}`}
                  <Action sub href="/{server.id}" active={activeHash !== '#statistics'}>
                    Console
                  </Action>
                  <Action sub href="/{server.id}#statistics" active={activeHash === '#statistics'}>
                    Statistics
                  </Action>
                {/if}
              {/each}
            </Section>
          {/each}
        {/if}
      </Sidebar>
    </div>

    <div class="w-full p-5 dark:bg-slate-900 dark:text-white">
      <div class="w-4/5 mx-auto">
        <slot />
      </div>
    </div>
  </div>
</main>
