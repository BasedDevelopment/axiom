<script>
  import '../app.css';
</script>

<div class="mx-auto">
  <nav class="border-b py-3 mb-5 border-gray-200">
    <div class="px-56 flex justify-between align-middle">
      <a href="/" class="font-semibold text-xl hover:underline">🦊</a>
      <ul class="flex gap-3">
        <li class="mr-2">
          <a href="/" class="link">
            Home
          </a>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </li>
      </ul>
    </div>
  </nav>
  <div class="px-56">
    <slot />
    <footer class="py-3 mt-5 flex justify-between border-t border-gray-200">
      <p>AS206288</p>
      <p>
        <a class="link" href="https://github.com/lukewhrit/vixen" rel="noreferrer">vixen</a> v1.0, powering
        <a class="link" href="https://as206288.net" rel="noreferrer">EricNet</a> via
        <a class="link" href="https://github.com/finnekit/eve" rel="noreferrer">eve</a>
      </p>
    </footer>
  </div>
</div>
