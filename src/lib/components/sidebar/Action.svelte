<script lang="ts">
  export let href: string;
  export let active: boolean;
  export let sub: boolean = false;
</script>

<a
  {href}
  class="block px-4 {sub ? 'ml-4' : ''} py-2 mt-2 {active
    ? 'bg-gray-300 dark:bg-gray-700'
    : ''} text-sm font-semibold text-gray-900 rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
>
  <slot />
</a>
