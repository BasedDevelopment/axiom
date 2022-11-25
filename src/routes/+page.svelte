<script>
// @ts-nocheck

  import { luke as servers } from '../data.json';
</script>

<h1 class="text-3xl font-bold underline">
  {#each servers as server, index }
    <li>
      <a href="/{server.id}">
        {server.name}
      </a>
    </li>
  {/each}
</h1>
