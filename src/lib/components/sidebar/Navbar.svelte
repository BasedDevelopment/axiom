<script lang="ts">
  import theme from '$lib/shared/stores/theme';
  import { Menu, MenuButton, MenuItem, MenuItems } from '@rgossiaux/svelte-headlessui';
  import DesktopIcon from '../icons/DesktopIcon.svelte';
  import HamburgerIcon from '../icons/HamburgerIcon.svelte';
  import MoonIcon from '../icons/MoonIcon.svelte';
  import SettingsIcon from '../icons/SettingsIcon.svelte';
  import SunIcon from '../icons/SunIcon.svelte';

  function handleClick() {
    document.getElementById('sidebar-container')?.classList.toggle('hidden');
  }

  function classNames(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(' ');
  }

  function resolveClass({ active, disabled }: { active: boolean; disabled: boolean }) {
    return classNames(
      'flex gap-2 w-full px-4 py-2 text-sm leading-5 text-left',
      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
      disabled && 'cursor-not-allowed opacity-50'
    );
  }
</script>

<header
  class="flex w-full items-center drop-shadow-md justify-between bg-slate-800 text-gray-300 p-4"
>
  <div class="flex items-center gap-2">
    <button type="button" class="text-3xl" on:click={handleClick}>
      <HamburgerIcon />
    </button>
    <div class="px-4">
      <a href="/" class="text-lg font-semibold hover:underline">🦊 EricNet</a>
    </div>
  </div>
  <div class="flex gap-3">
    <SettingsIcon />

    <Menu>
      <MenuButton>
        <MoonIcon />
      </MenuButton>

      <MenuItems
        class="absolute right-3 w-36 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
      >
        <MenuItem as="button" on:click={() => theme.set('light')} class={resolveClass}>
          <SunIcon />
          <span>Light</span>
        </MenuItem>
        <MenuItem as="button" on:click={() => theme.set('dark')} class={resolveClass}>
          <MoonIcon />
          <span>Dark</span>
        </MenuItem>
        <MenuItem as="button" on:click={() => theme.set('system')} class={resolveClass}>
          <DesktopIcon />
          <span>System</span>
        </MenuItem>
      </MenuItems>
    </Menu>
  </div>
</header>
