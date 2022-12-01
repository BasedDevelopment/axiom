<script lang="ts">
  import '../app.css';

  import Section from '$lib/components/sidebar/Section.svelte';
  import Action from '$lib/components/Action.svelte';
  import SubAction from '$lib/components/SubAction.svelte';

  import { page } from '$app/stores';
  import type { PageData } from './$types';
  import Sidebar from '$lib/components/Sidebar.svelte';

  function firstUpperCase(str: string) {
    const firstLetter = str.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = str.slice(1);

    return firstLetterCap + remainingLetters;
  }

  function handleClick() {
    document.getElementById('sidebar-container')?.classList.toggle('hidden')
  }

  $: activeUrl = $page.url.pathname;
  $: activeHash = $page.url.hash;

  export let data: PageData;
</script>

<svelte:head>
  <title>Vixen</title>
  <meta name="description" content="Web interface for Eve">
</svelte:head>

<main class="min-h-screen w-full">
  <!-- navbar -->
  <header class="flex w-full items-center justify-between bg-gray-800 text-gray-300 p-4">
    <!-- logo -->
    <div class="flex items-center space-x-2">
      <button type="button" class="text-3xl" on:click={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div class="px-4">
        <a href="/" class="text-lg font-semibold">🦊 EricNet</a>
      </div>
    </div>

    <div class="flex gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    </div>
  </header>

  <div class="flex h-full" style="min-height: 93.3vh;">
    <div id="sidebar-container">
      <Sidebar>
        <Section name="Dashboard">
          <Action href="/" active={activeUrl === '/'}>Home</Action>
        </Section>
        {#each data.boxes as box}
          <Section name={box.name}>
            {#each box.vms as server}
              <Action href="/{server.id}" active={false}>{firstUpperCase(server.name)}</Action
              >
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
