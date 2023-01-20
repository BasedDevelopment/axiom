import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, locals }) => {
  const req = await fetch(`http://10.10.9.4:3000/virtual_machines/${params.uuid}`, {
    headers: {
      Authorization: `Bearer ${locals.token}`,
    },
  });

  if (req.ok) {
    const body = await req.json();

    return {
      server: body,
    };
  }

  throw error(404, "Couldn't find server");
}) satisfies PageServerLoad;
