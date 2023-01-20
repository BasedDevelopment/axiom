<script lang="ts">
  import cookie from 'cookie';
  import { Dialog, DialogOverlay, DialogTitle, Transition } from '@rgossiaux/svelte-headlessui';
  import { goto } from '$app/navigation';

  export let isOpen: boolean = false;

  async function logout() {
    const date = new Date();
    date.setDate(date.getDate() - 1);

    document.cookie = cookie.serialize('token', '', {
      expires: date,
      sameSite: 'strict',
    });

    await goto('/');
    isOpen = false;
  }
</script>

<Transition
  show={isOpen}
  enter="transition duration-100 ease-out"
  enterFrom="transform scale-95 opacity-0"
  enterTo="transform scale-100 opacity-100"
  leave="transition duration-75 ease-out"
  leaveFrom="transform scale-100 opacity-100"
  leaveTo="transform scale-95 opacity-0"
>
  <Dialog open={isOpen} on:close={() => (isOpen = false)}>
    <DialogOverlay class="opacity-25 fixed inset-0 z-40 bg-black" />

    <div
      class="bg-white z-50 rounded-md outline outline-indigo-600 drop-shadow-lg dark:bg-slate-800 dark:text-white"
      style={'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);'}
    >
      <DialogTitle class="bg-indigo-600 text-white font-bold py-2 px-6">Settings</DialogTitle>

      <div class="py-2 px-6 bg-none">
        <span class="text-sm font-semibold uppercase mb-6 text-gray-600 dark:text-gray-300">Account</span>
        <div class="flex gap-2">
          <button class="button" on:click={logout}>Logout</button>
          <a class="button" href="mailto:staff@as206628.net?subject=Account closure">Delete Account</a>
        </div>
      </div>
    </div>
  </Dialog>
</Transition>
