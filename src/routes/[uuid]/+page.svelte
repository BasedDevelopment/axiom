<script lang="ts">
  import type { PageData } from './$types';

  function firstUpperCase(str: string) {
    const firstLetter = str.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = str.slice(1)

    return  firstLetterCap + remainingLetters
  }

  export let data: PageData;
</script>

<header class="flex justify-between align-middle">
  <div>
    <p class="text-3xl font-bold tracking-wide">{firstUpperCase(data.server.name)}</p>
    <p class="font-mono text-gray-500 text-md">{data.server.box} / {data.server.ip}</p>
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

<main class="grid gap-5 grid-cols-8 mt-5">
  <section class="col-span-2 space-y-4">
    <ul class="block py-2 rounded-md bg-gray-100 text-black shadow-sm">
      <li class="my-1 mx-3 font-semibold">
        <a
          href="#stop-start"
          class="py-2 px-4 flex gap-3 hover:bg-gray-300 rounded-md"
        >
          Stop / Start
        </a>
      </li>
      <li class="my-1 mx-3 font-semibold">
        <a
          href="#reboot"
          class="py-2 px-4 flex gap-3 hover:bg-gray-300 rounded-md"
        >
          Reboot
        </a>
      </li>
      <li class="my-1 mx-3 font-semibold">
        <a
          href="#hibernate"
          class="py-2 px-4 flex gap-3 hover:bg-gray-300 rounded-md"
        >
          Hibernate
        </a>
      </li>
      <li class="my-1 mx-3 font-semibold">
        <a
          href="#reset"
          class="py-2 px-4 flex gap-3 hover:bg-gray-300 rounded-md"
        >
          Reset
        </a>
      </li>
    </ul>
    <ul class="block py-2 rounded-md bg-gray-100 text-black shadow-sm">
      <li class="my-1 mx-3 font-semibold">
        <a
          href="#reset"
          class="py-2 px-4 flex gap-3 hover:bg-gray-300 rounded-md"
        >
          Reset
        </a>
      </li>
    </ul>
  </section>
  <section class="col-span-6 space-y-4">
    <div class="bg-gray-100 py-2 px-4 rounded flex justify-between">
      <div class="flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
        <span>CPU</span>
      </div>
      <div class="flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
        </svg>
        <span>Memory</span>
      </div>
      <div class="flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
        <span>Disk</span>
      </div>
    </div>
    <div class="flex justify-center bg-slate-900 text-white rounded h-96">
      <p class="font-lg self-center">noVNC</p>
    </div>
  </section>
</main>
