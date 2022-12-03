<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Server from '$lib/components/Server.svelte';
  import Item from '$lib/components/table/Item.svelte';
  import Row from '$lib/components/table/Row.svelte';
  import Table from '$lib/components/table/Table.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="space-y-5" id="console">
  <Server server={data.server} />
  <section class="flex flex-col md:flex-row gap-3">
    <div class="w-full md:w-1/3 space-y-3">
      <Button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
        </svg>
        Start
      </Button>
      <Button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
        Reboot
      </Button>
      <Button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
        </svg>
        Reset
      </Button>
      <Button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Hibernate
      </Button>
    </div>
    <div class="w-full bg-slate-900 text-white flex flex-col font-mono rounded-md h-96">
      <div class="bg-slate-800 rounded-t-md px-4 py-2 text-sm text-gray-400 w-full">
        Console
      </div>
      <div class="px-4 py-2 flex gap-3 mt-auto text-gray-400">
        >
        <input type="text" class="w-full bg-transparent outline-none placeholder:text-sm" placeholder="...">
      </div>
    </div>
  </section>
</div>

<hr class="my-10" />

<div id="statistics" class="space-y-16">
  <div class="flex flex-col md:flex-row gap-4">
    <div class="w-2/5">
      <h1 class="font-bold text-2xl mb-3 text-gray-900">Hardware</h1>
      <p class="text-gray-500 sr-only md:not-sr-only">
        These are the specifications of your server, pulled from libvirt. If you need an upgrade, feel
        free to contact <a class="link" href="mailto:staff@as206628.net">support</a>.
      </p>
    </div>
    <div class="w-full">
      <Table>
        <Row>
          <Item bold>Memory</Item>
          <Item>4.00 GiB DDR3</Item>
        </Row>
        <Row>
          <Item bold>Processors</Item>
          <Item>8 (2 sockets, 4 cores) - Intel® Xeon® E-2386G</Item>
        </Row>
        <Row>
          <Item bold>OS</Item>
          <Item>Ubuntu 22.04.1 LTS, Linux 5.10</Item>
        </Row>
        <Row>
          <Item bold>Storage</Item>
          <Item>scsi0 (24/40 GiB), sda2 (54/160 GiB)</Item>
        </Row>
        <Row>
          <Item bold>IPs</Item>
          <Item>{data.server.ip} - fe80::303b:38ff:fe03:b92d</Item>
        </Row>
      </Table>
    </div>
  </div>

  {#each ['CPU Usage', 'Memory Usage', 'Network Traffic', 'Disk I/O'] as entry}
    <div class="flex flex-col md:flex-row gap-4">
      <div class="w-full md:w-2/5">
        <h1 class="font-bold text-2xl mb-3 text-gray-900">{entry}</h1>
        <p class="text-gray-500 sr-only md:not-sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
      </div>
      <div class="w-full">
        Hello
      </div>
    </div>
  {/each}
</div>
