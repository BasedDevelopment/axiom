<script lang="ts">
  $: command = '';
</script>

<div
  class="w-full bg-slate-900 dark:border-2 dark:border-slate-800 shadow-md text-white flex flex-col font-mono rounded-md h-96"
>
  <div class="bg-slate-800 px-4 py-2 text-sm rounded-t-md text-gray-400 w-full">Console</div>
  <form class="px-4 py-2 flex gap-3 mt-auto text-gray-400">
    >
    <input
      type="text"
      id="command-line"
      class="w-full bg-transparent outline-none placeholder:text-sm"
      placeholder="..."
      bind:value={command}
    />
    <input type="submit" class="hidden" />
  </form>
</div>
