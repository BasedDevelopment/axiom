<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import CircleXIcon from '$lib/components/icons/CircleXIcon.svelte';
  import CycleIcon from '$lib/components/icons/CycleIcon.svelte';
  import PowerIcon from '$lib/components/icons/PowerIcon.svelte';
  import RewindIcon from '$lib/components/icons/RewindIcon.svelte';
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
        <PowerIcon />
        Start
      </Button>
      <Button>
        <CycleIcon />
        Reboot
      </Button>
      <Button>
        <RewindIcon />
        Reset
      </Button>
      <Button>
        <CircleXIcon />
        Hibernate
      </Button>
    </div>
    <div
      class="w-full bg-slate-900 dark:border-2 dark:border-indigo-500 text-white flex flex-col font-mono rounded-md h-96"
    >
      <div class="bg-slate-800 rounded-t-md px-4 py-2 text-sm text-gray-400 w-full">Console</div>
      <div class="px-4 py-2 flex gap-3 mt-auto text-gray-400">
        >
        <input
          type="text"
          class="w-full bg-transparent outline-none placeholder:text-sm"
          placeholder="..."
        />
      </div>
    </div>
  </section>
</div>

<hr class="my-10 dark:border-gray-500" />

<div id="statistics" class="space-y-16">
  <div class="flex flex-col md:flex-row gap-4">
    <div class="w-2/5">
      <h1 class="font-bold text-2xl mb-3 text-gray-900 dark:text-white">Hardware</h1>
      <p class="text-gray-500 sr-only md:not-sr-only">
        These are the specifications of your server, pulled from libvirt. If you need an upgrade,
        feel free to contact <a class="link" href="mailto:staff@as206628.net">support</a>.
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
        <h1 class="font-bold text-2xl mb-3 text-gray-900 dark:text-white">{entry}</h1>
        <p class="text-gray-500 sr-only md:not-sr-only">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
      </div>
      <div class="w-full">Hello</div>
    </div>
  {/each}
</div>
