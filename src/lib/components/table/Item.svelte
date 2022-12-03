<script lang="ts">
  export let bold: boolean = false;
</script>

<td class="p-3 {bold ? 'font-bold' : ''}">
  <slot />
</td>
