<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Server from '$lib/components/Server.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="space-y-5" id="console">
  <Server server={data.server} />
  <section class="flex flex-col md:flex-row gap-3">
    <div class="w-full md:w-1/3 space-y-3">
      <Button>Start</Button>
      <Button>Reboot</Button>
      <Button>Reset</Button>
      <Button>Hibernate</Button>
    </div>
    <div class="w-full bg-slate-900 text-white flex flex-col font-mono rounded-md h-96">
      <div class="bg-slate-800 rounded-t-md px-4 py-2 text-sm text-gray-400 w-full">
        Console
      </div>
      <div class="px-4 py-2 flex gap-3 mt-auto text-gray-400">
        >
        <input type="text" class="w-full bg-transparent outline-none placeholder:text-sm" placeholder="...">
      </div>
    </div>
  </section>
</div>

<hr class="my-10" />

<div id="statistics" class="grid gap-6 space-y-8 grid-cols-10 grid-rows-5">
  <div class="col-span-3">
    <h1 class="font-bold text-2xl mb-3 text-gray-900">Hardware</h1>
    <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
  </div>
  <div class="col-span-7">Hello</div>

  <div class="col-span-3">
    <h1 class="font-bold text-2xl">CPU Usage</h1>
    <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
  </div>
  <div class="col-span-7">Hello</div>

  <div class="col-span-3">
    <h1 class="font-bold text-2xl">Memory Usage</h1>
    <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
  </div>
  <div class="col-span-7">Hello</div>

  <div class="col-span-3">
    <h1 class="font-bold text-2xl">Network Traffic</h1>
    <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
  </div>
  <div class="col-span-7">Hello</div>

  <div class="col-span-3">
    <h1 class="font-bold text-2xl">Disk I/O</h1>
    <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
  </div>
  <div class="col-span-7">Hello</div>
</div>
