<div class="bg-gray-100 w-full h-full p-4">
  <div class="flex justify-between p-4">
    <span class="text-xl w-6 h-6">
      <a href="https://as206628.net" rel="noreferrer">
        🦊
      </a>
    </span>
    <div class="flex gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    </div>
  </div>
  <nav class="flex-grow h-max my-2">
    <slot />
  </nav>
  <footer class="text-gray-400 p-4 space-y-1 text-sm">
    <p>⚡️ Powered by <a href="https://github.com/lukewhrit/vixen" class="border-gray-400 hover:border-b" rel="noreferrer">Vixen</a></p>
    <p>&COPY; {new Date().getFullYear()} BNS Services LLC</p>
  </footer>
</div>
