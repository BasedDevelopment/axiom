<script lang="ts">
  import Button from '$lib/components/Button.svelte';
import Server from '$lib/components/Server.svelte';
  import Status from '$lib/components/Status.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="space-y-5" id="console">
  <Server server={data.server} />
  <section class="grid grid-cols-10 gap-3">
    <div class="col-span-2 space-y-3">
      <Status is={data.server.status} />
      <Button>Start</Button>
      <Button>Reboot</Button>
      <Button>Reset</Button>
      <Button>Hibernate</Button>
    </div>
    <div class="col-span-8 bg-slate-900 text-white rounded-md h-96">
      <div class="bg-slate-800 rounded-t-md px-4 py-2 font-mono text-sm text-gray-400 w-full">Console</div>
    </div>
  </section>
</div>

<div id="statistics" class="mt-20">
  Hello
</div>
