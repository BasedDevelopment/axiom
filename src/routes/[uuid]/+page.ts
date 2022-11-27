import servers from '../../data.json';
import type { LoadEvent } from '@sveltejs/kit';

export function load({ params }: LoadEvent) {
  const server = servers[0].vms.filter(e => e.id === params.uuid)[0];

  return { server };
}
