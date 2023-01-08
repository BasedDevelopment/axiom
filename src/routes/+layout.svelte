<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/sidebar/Navbar.svelte';
  import theme from '$lib/shared/stores/theme';
  import { onMount } from 'svelte';

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
</script>

<svelte:head>
  <title>Vixen</title>
  <meta name="description" content="Web interface for Eve" />
</svelte:head>

<main class="min-h-screen h-screen flex flex-col w-full {currentTheme}">
  <Navbar />

  <div class="flex flex-grow">
    <slot />
  </div>
</main>
