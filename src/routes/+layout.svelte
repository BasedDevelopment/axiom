<script lang="ts">
  import Action from '$lib/components/Action.svelte';
  import SubAction from '$lib/components/SubAction.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import boxes from '../data.json';
  import '../app.css';
  import Section from '$lib/components/Section.svelte';

  function firstUpperCase(str: string) {
    const firstLetter = str.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = str.slice(1);

    return firstLetterCap + remainingLetters;
  }
</script>

<div class="grid grid-cols-12 gap-3">
  <div class="col-span-2 md:flex flex-col md:flex-row md:min-h-screen w-full">
    <Sidebar>
      <Section name="Dashboard">
        <Action href="/" active={false}>Home</Action>
      </Section>
      {#each boxes as box}
        <Section name={`${box.name} VMs`}>
          {#each box.vms as server}
            <Action href="/{server.id}" active={false}>{firstUpperCase(server.name)}</Action>
            {#if server.name === 'jupiter'}
              <SubAction href="/{server.id}#console" active={true}>Console</SubAction>
              <SubAction href="/{server.id}#statistics" active={false}>Statistics</SubAction>
            {/if}
          {/each}
        </Section>
      {/each}
    </Sidebar>
  </div>
  <div class="col-span-10 py-5 mx-auto w-4/5">
    <slot />
  </div>
</div>
