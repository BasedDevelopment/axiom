<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<header class="flex justify-between align-middle">
  <div class="font-mono">
    <p class="text-3xl font-semibold">{data.server.name}</p>
    <p class="text-md">{data.server.box} / {data.server.ip}</p>
  </div>
  <div class="place-self-center">
    {#if data.server.status === 'ON'}
    <p class="font-bold text-white bg-emerald-500 px-8 py-2 rounded-md">
      {data.server.status}
    </p>
    {:else if data.server.status === 'OFF'}
    <p class="font-bold text-white bg-rose-500 px-8 py-2 rounded-md">
      {data.server.status}
    </p>
    {/if}
  </div>
</header>

<main class="grid grid-cols-8 mt-5">
  <section class="col-span-2">
    <ul class="block py-2 mr-10 rounded-md bg-gray-100 text-black shadow-sm">
      <li class="my-1 mx-3 font-semibold">
        <a
          href="/app/"
          class="py-2 px-4 flex gap-3 hover:bg-gray-300 rounded-md"
        >
          Stop / Start
        </a>
      </li>
      <li class="my-1 mx-3 font-semibold">
        <a
          href="/app/"
          class="py-2 px-4 flex gap-3 hover:bg-gray-300 rounded-md"
        >
          Reboot
        </a>
      </li>
      <li class="my-1 mx-3 font-semibold">
        <a
          href="/app/"
          class="py-2 px-4 flex gap-3 hover:bg-gray-300 rounded-md"
        >
          Hibernate
        </a>
      </li>
      <li class="my-1 mx-3 font-semibold">
        <a
          href="/app/"
          class="py-2 px-4 flex gap-3 hover:bg-gray-300 rounded-md"
        >
          Reset
        </a>
      </li>
    </ul>
  </section>
  <section class="col-span-6 bg-slate-900 rounded h-96"></section>
</main>
