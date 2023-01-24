<script lang="ts">
  import Status from '$lib/components/server/Status.svelte';
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
              class="group border-indigo-500 group-hover:border-indigo-400 flex flex-col rounded-md border-2"
            >
              <a
                class="text-indigo-500 group-hover:text-indigo-400 px-3 py-2 group-hover:underline text-lg font-bold"
                href="/me/{container.vm.id}"
                >{container.vm.hostname}
                <p class="mt-1">
                  <Status
                    code={container.vm.state}
                    reason={container.vm.state_reason}
                    color="bg-indigo-500 group-hover:bg-indigo-400"
                  />
                </p></a
              >
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
