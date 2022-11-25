<script>
  import { luke as servers } from '../data.json';
  import '../app.css';
</script>

<div class="py-8 px-80 mx-auto">
  <nav class="border-b py-3 mb-5 border-black flex justify-between text-lg">
    <a href="https://as206628.net" class="font-bold hover:underline">🦊 EricNet</a>
    <ul class="gap-1 list-none flex">
      {#each servers as server }
        <li>
          <a
            class="text-blue-500 hover:bg-blue-100 p-2 rounded-md hover:cursor-pointer"
            href="/{server.id}"
          >
            {server.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <main>
    <slot />
  </main>
</div>
