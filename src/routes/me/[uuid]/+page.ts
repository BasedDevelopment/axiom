import { data } from '$lib/data';
import { error, type LoadEvent } from '@sveltejs/kit';

export function load({ params }: LoadEvent) {
  for (const box of data.boxes) {
    const server = box.vms.find((e) => (e.id === params.uuid));

    if (!server) {
      continue;
    }

    return { server };
  }

  throw error(404, 'Couldn\'t find server');
}
