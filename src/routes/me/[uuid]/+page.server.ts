import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import * as config from '$lib/config';

export const load = (async ({ params, locals }) => {
  const req = await fetch(`${config.INSTANCE}/virtual_machines/${params.uuid}`, {
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
