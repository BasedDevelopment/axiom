<script lang="ts">
  export let name: string;
</script>

<div class="block pb-2">
  <span class="text-xs tracking-wide text-gray-400 uppercase px-1">{name}</span>
  <slot />
</div>
