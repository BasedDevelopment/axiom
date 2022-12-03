<script lang="ts">
  export let columns: string[] = [];
</script>

<div class="bg-white">
  <div class="overflow-x-auto border-x border-t">
     <table class="table-auto w-full">
        <thead class="border-b">
           <tr class="bg-gray-100">
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
