<script lang="ts">
  import Console from '$lib/components/server/Console.svelte';
  import CircleXIcon from '$lib/components/icons/CircleXIcon.svelte';
  import CycleIcon from '$lib/components/icons/CycleIcon.svelte';
  import PowerIcon from '$lib/components/icons/PowerIcon.svelte';
  import RewindIcon from '$lib/components/icons/RewindIcon.svelte';
  import Header from '$lib/components/server/Header.svelte';
  import Button from '$lib/components/server/Button.svelte';
  import Item from '$lib/components/table/Item.svelte';
  import Row from '$lib/components/table/Row.svelte';
  import Table from '$lib/components/table/Table.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="space-y-5" id="console">
  <Header server={data.server} />
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
    <Console />
  </section>
</div>

<hr class="my-10 dark:border-gray-500" />

<div id="statistics" class="space-y-16 mb-12">
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
          <Item>{data.server.memory / 1073741824} GiB</Item>
        </Row>
        <Row>
          <Item bold>Processors</Item>
          <Item>{data.server.cpu}</Item>
        </Row>
        <Row>
          <Item bold>OS</Item>
          <Item>Ubuntu 22.04.1 LTS, Linux 5.10</Item>
        </Row>
        <Row>
          <Item bold>Storage</Item>
          <Item>
            {#if data.server.storages !== null}
              {#each data.server.storages as device}
                <span>{device.name} ({device.used}/{device.total} GB),</span>
              {/each}
            {:else}
              None
            {/if}
          </Item>
        </Row>
        <Row>
          <Item bold>IPs</Item>
          <Item>
            {#if data.server.nics !== null}
              <ul>
                {#each data.server.nics as nic}
                  <li>{nic.ip}</li>
                {/each}
              </ul>
            {:else}
              None
            {/if}
          </Item>
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
