<script lang="ts">
  import Status from '$lib/components/server/Status.svelte';
  import ChipIcon from '../icons/ChipIcon.svelte';
  import CloudIcon from '../icons/CloudIcon.svelte';
  import DataIcon from '../icons/DataIcon.svelte';

  export let server: {
    id: string;
    hv: string;
    hostname: string;
    user: string;
    cpu: number;
    memory: number;
    nics: null;
    storages: null;
    created: Date;
    updated: Date;
    remarks: string;
    state: number;
    state_str: string;
    state_reason: string;
  };
</script>

<section class="flex justify-between p-5 bg-gray-100 dark:bg-slate-800 rounded-md items-center">
  <div class="space-y-1">
    <p class="text-3xl font-bold tracking-wide">{server.hostname}</p>
    <Status code={server.state} reason={server.state_reason} />
  </div>
  <div>
    <!-- Maybe this should include OS/image? -->
    <div class="flex gap-2">
      <ChipIcon />
      <span>{Math.round(Math.random() * 100)}.{Math.round(Math.random() * 99)}%</span>
    </div>
    <div class="flex gap-2">
      <CloudIcon />
      <span>{Math.round(Math.random() * 15) + 1}.{Math.round(Math.random() * 99)}/16.00 GiB</span>
    </div>
    <div class="flex gap-2">
      <DataIcon />
      <span>40 GiB</span>
    </div>
  </div>
</section>
