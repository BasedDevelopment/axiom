import servers from '../../data.json';
import { error, type LoadEvent } from '@sveltejs/kit';

export function load({ params }: LoadEvent) {
  for (const box of servers) {
    const server = box.vms.find((e) => (e.id === params.uuid));

    if (!server) {
      continue;
    }

    return { server };
  }

  throw error(404, 'Couldn\'t find server');
}
