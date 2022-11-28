<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

{#each data.boxes as box}
  <p class="font-bold">{box.name}</p>
  <ul class="list-inside list-disc">
    {#each box.vms as vm}
      <li><a class="link" href="/{vm.id}">{vm.name}</a></li>
    {/each}
  </ul>
{/each}
