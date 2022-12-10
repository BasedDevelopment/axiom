<script lang="ts">
  import Status from '$lib/components/Status.svelte';
  import { firstUpperCase } from '$lib/firstUpperCase';
  import ChipIcon from './icons/ChipIcon.svelte';
  import CloudIcon from './icons/CloudIcon.svelte';
  import DataIcon from './icons/DataIcon.svelte';

  export let server: Record<string, string>;
</script>

<section class="flex justify-between p-5 bg-gray-100 dark:bg-slate-800 rounded-md items-center">
  <div class="space-y-1">
    <p class="text-3xl font-bold tracking-wide">{firstUpperCase(server.name)}</p>
    <Status is={server.status} />
  </div>
  <div>
    <!-- Maybe this should include OS/image? -->
    <div class="flex gap-2">
      <ChipIcon />
      <span>{Math.round(Math.random()*100)}.{Math.round(Math.random()*99)}%</span>
    </div>
    <div class="flex gap-2">
      <CloudIcon />
      <span>{Math.round(Math.random()*15)+1}.{Math.round(Math.random()*99)}/16.00 GiB</span>
    </div>
    <div class="flex gap-2">
      <DataIcon />
      <span>40 GiB</span>
    </div>
  </div>
</section>
