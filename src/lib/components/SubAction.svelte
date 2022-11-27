<script lang="ts">
  export let href: string;
  export let active: boolean;
</script>

<a
  {href}
  class="block ml-4 px-4 py-2 mt-2 {active
    ? 'bg-gray-300 dark-mode:bg-gray-800'
    : ''} text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
>
  <slot />
</a>
