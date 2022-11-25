<script>
  import { luke as servers } from '../data.json';
</script>

<h1 class="text-3xl font-bold underline">
  {#each servers as server, index }
    <li>{server.name}</li>
  {/each}
</h1>
