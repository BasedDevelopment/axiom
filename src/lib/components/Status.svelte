<script lang="ts">
  export let code: number;
  export let reason: string = '';

  enum Status {
    'Unknown' = 0,
    'On',
    'Blocked',
    'Paused',
    'Shutdown',
    'Off', // Shutoff
    'Crashed',
    'Suspended'
  }

  const colors = [
    'bg-gray-400', // Unknown
    'bg-emerald-500', // On
    'bg-amber-400', // Blocked
    'bg-gray-400', // Paused
    'bg-rose-500', // Off, Shutdown
    'bg-rose-500', // Off, Shutoff
    'bg-gray-400', // Crashed
    'bg-neutral-900' // Suspended
  ];
</script>

<div class="inline-block text-center text-sm">
  <span class="sr-only">VM Status:</span>
  <p title={reason} class="font-bold text-white {colors[code]} p-1 rounded-md">
    {Status[code].toUpperCase()}
  </p>
</div>
