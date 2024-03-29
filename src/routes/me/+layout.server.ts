import type { User } from '$lib/data';
import { redirect } from '@sveltejs/kit';
import type { Container } from 'postcss';
import type { LayoutServerLoad } from './$types';
import * as config from '$lib/config';


async function getUser(token: string) {
  const user = await fetch(`${config.INSTANCE}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (user.ok) {
    const json: User = await user.json();
    return json;
  } else {
    const json = await user.json();
    throw new Error(json.error);
  }
}

async function getContainers(token: string) {
  const vms = await fetch(`${config.INSTANCE}/virtual_machines/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (vms.ok) {
    const json: Container[] = await vms.json();
    return json;
  } else {
    const json = await vms.json();
    throw new Error(json.error);
  }
}

export const load = (async ({ parent, locals }) => {
  const { authenticated } = await parent();
  const token = locals.token;

  if (!authenticated) {
    throw redirect(307, '/');
  }

  return {
    user: await getUser(token),
    containers: await getContainers(token),
  };
}) satisfies LayoutServerLoad;
