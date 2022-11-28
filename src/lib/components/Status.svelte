<script lang="ts">
  export let is: string;
</script>

<div class="text-center w-1/3 text-sm">
  <span class="sr-only">VM Status:</span>
  {#if is.toLowerCase() === 'on'}
    <p class="font-bold text-white bg-emerald-500 px-1 py-0.5 rounded-md">
      {is.toUpperCase()}
    </p>
  {:else if is.toLowerCase() === 'off'}
    <p class="font-bold text-white bg-rose-500 px-8 py-2 rounded-md">
      {is.toUpperCase()}
    </p>
  {/if}
</div>
