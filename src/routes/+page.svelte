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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci ex, scelerisque vel
      ullamcorper nec, dignissim non tortor. Pellentesque ac ante sed augue tristique venenatis.
    </p>
    <div class="space-y-4">
      {#each data.boxes as box}
        <div>
          <p class="text-sm font-semibold uppercase mb-2">{box.name}</p>
          <ul class="grid grid-cols-3 grid-rows-auto gap-3">
            {#each box.vms as vm}
              <li class="border-slate-800 dark:border-indigo-500 px-3 py-2 flex flex-col rounded-md border-2">
                <a class="link text-lg font-bold" href="/{vm.id}">{firstUpperCase(vm.name)}</a>
                <span class="font-mono text-xs text-gray-600">{vm.ip}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</div>
