<script>
  import Form from './Form.svelte';
  import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    Transition
  } from '@rgossiaux/svelte-headlessui';

  let isOpen = false;
</script>

<button on:click={() => (isOpen = true)}>open</button>

<Transition
  show={isOpen}
  enter="transition duration-100 ease-out"
  enterFrom="transform scale-95 opacity-0"
  enterTo="transform scale-100 opacity-100"
  leave="transition duration-75 ease-out"
  leaveFrom="transform scale-100 opacity-100"
  leaveTo="transform scale-95 opacity-0"
>
  <Dialog
    open={isOpen}
    on:close={() => (isOpen = false)}
  >
    <DialogOverlay class="opacity-25 fixed inset-0 z-40 bg-black" />

    <div
      class="bg-white z-50 rounded-md outline outline-indigo-600 drop-shadow-lg dark:bg-slate-800 dark:text-white"
      style={'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);'}
    >
      <DialogTitle class="bg-indigo-600 text-white font-bold py-3 px-8">
        Sign in to your account
      </DialogTitle>

      <div class="py-4 px-8 bg-none">
        <Form bind:dialogOpen={isOpen} />
      </div>
    </div>
  </Dialog>
</Transition>
