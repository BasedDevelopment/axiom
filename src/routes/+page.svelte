<script>
  import { firstUpperCase } from '$lib/firstUpperCase';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="flex justify-center">
  <div class="text-slate-800 dark:text-white w-3/4 py-4">
    <h1 class="text-4xl font-extrabold mb-3">
      Hello, {firstUpperCase(data.authenticatedUser.name)}!
    </h1>
    <p class="mb-6">
      Hi, welcome to the EricNet Dashboard! Below you can see a list of all the servers you have
      access to, and their hypervisors. If you click on them you can access power controls, a
      console, and in-depth statistics.
    </p>
    <div class="space-y-4">
      {#each data.boxes as box}
        <div>
          <p class="text-sm font-semibold uppercase mb-2 text-gray-600 dark:text-gray-300">{box.name}</p>
          <ul class="grid grid-cols-3 grid-rows-auto gap-3">
            {#each box.vms as vm}
              <li
                class="border-slate-800 dark:border-indigo-500 px-3 py-2 flex flex-col rounded-md border-2"
              >
                <a class="link text-lg font-bold" href="/{vm.id}">{firstUpperCase(vm.name)}</a>
                <span class="font-mono text-xs text-gray-600 dark:text-gray-300">{vm.ips[0]}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</div>
