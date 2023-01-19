<script lang="ts">
  import type { Container, User } from '$lib/data';
  import { firstUpperCase } from '$lib/firstUpperCase';

  export let data: {
    authenticated: boolean;
    containers: Container[];
    user: User;
  };
</script>

<div class="flex justify-center">
  <div class="text-slate-800 dark:text-white py-4 lg:w-4/6">
    <h1 class="text-4xl font-extrabold mb-3">
      Hello, {firstUpperCase(data.user.name)}!
    </h1>
    <p class="mb-6">
      Hi, welcome to the EricNet Dashboard! Below you can see a list of all the servers you have
      access to, and their hypervisors. If you click on them you can access power controls, a
      console, and in-depth statistics.
    </p>
    <div class="space-y-4">
      <div>
        <p class="text-sm font-semibold uppercase mb-2 text-gray-600 dark:text-gray-300">
          Containers
        </p>
        <ul class="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-3">
          {#each data.containers as container}
            <li
              class="border-slate-800 dark:border-indigo-500 px-3 py-2 flex flex-col rounded-md border-2"
            >
              <a class="link text-lg font-bold" href="/me/{container.vm.id}"
                >{container.vm.hostname}</a
              >
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
