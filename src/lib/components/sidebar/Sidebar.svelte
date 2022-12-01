<aside class="flex w-72 flex-col h-full bg-gray-100 p-4 dark:bg-slate-900 dark:text-white">
  <nav class="h-max flex-grow my-2">
    <slot />
  </nav>
  <footer class="text-gray-400 p-4 space-y-1 text-sm">
    <p>
      ⚡️ Powered by <a
        href="https://github.com/lukewhrit/vixen"
        class="border-gray-400 hover:border-b"
        rel="noreferrer">Vixen</a
      >
    </p>
    <p>&COPY; {new Date().getFullYear()} BNS Services LLC</p>
  </footer>
</aside>
