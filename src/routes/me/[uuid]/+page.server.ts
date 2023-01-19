import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from '../../$types';

export async function load({ params, locals }: PageServerLoadEvent) {
  const req = await fetch(`http://10.10.9.4:3000/virtual_machines/${params.uuid}`, {
    headers: {
      // @ts-expect-error user is defined in hooks.server.ts
      Authorization: `Bearer ${locals.user.token}`
    }
  });

  if (req.ok) {
    const body = await req.json();

    return {
      server: body
    };
  }

  throw error(404, "Couldn't find server");
}
