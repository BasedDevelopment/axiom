<script lang="ts">
  export let is: string;
</script>

<div class="inline-block text-center text-sm">
  <span class="sr-only">VM Status:</span>
  {#if is.toLowerCase() === 'on'}
    <p class="font-bold text-white bg-emerald-500 p-1 rounded-md">
      {is.toUpperCase()}
    </p>
  {:else if is.toLowerCase() === 'off'}
    <p class="font-bold text-white bg-rose-500 p-1 rounded-md">
      {is.toUpperCase()}
    </p>
  {:else}
    <p class="font-bold text-white bg-gray-500 p-1 rounded-md">
      {is.toUpperCase()}
    </p>
  {/if}
</div>
