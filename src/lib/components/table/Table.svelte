<script lang="ts">
  export let columns: string[] = [];
</script>

<div class="bg-white dark:bg-slate-900">
  <div class="overflow-x-auto border-x border-t dark:border-slate-800">
    <table class="table-auto w-full">
      <thead class="border-b dark:border-b-slate-800">
        <tr class="bg-gray-100 dark:bg-slate-800">
          {#if columns.length !== 0}
            {#each columns as column}
              <th scope="col" class="text-left p-4 font-medium">
                {column}
              </th>
            {/each}
          {/if}
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</div>
