<aside class="flex w-72 flex-col h-full bg-gray-100 p-4 dark:bg-slate-800 dark:text-white" id="sidebar-container">
  <nav class="h-max flex-grow my-2">
    <slot />
  </nav>
  <footer class="text-gray-400 p-4 space-y-1 text-sm">
    <p>
      ⚡️ Powered by <a
        href="https://github.com/lukewhrit/axiom"
        class="border-gray-400 hover:border-b"
        rel="noreferrer">Axiom</a
      >
      and
      <a
        href="https://github.com/ericzty/eve"
        class="border-gray-400 hover:border-b"
        rel="noreferrer">Eve</a
      >
    </p>
    <p>&COPY; {new Date().getFullYear()} BNS Services LLC</p>
  </footer>
</aside>
