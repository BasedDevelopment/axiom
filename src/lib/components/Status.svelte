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
  };

  const colors = [
    'gray-400', // Unknown
    'emerald-500', // On
    'amber-400', // Blocked
    'gray-400', // Paused
    'rose-500', // Off, Shutdown
    'rose-500', // Off, Shutoff
    'gray-400', // Crashed
    'neutral-900', // Suspended
  ];
</script>

<div class="inline-block text-center text-sm">
  <span class="sr-only">VM Status:</span>
  <p title={reason} class={`font-bold text-white bg-${colors[0] || 'gray-400'} p-1 rounded-md`}>
    {Status[code].toUpperCase()}
  </p>
</div>
