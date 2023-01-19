import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoadEvent } from '../$types';

interface User {
  created: string;
  email: string;
  id: string; // uuid
  last_login: string;
  name: string;
  updated: string;
}

interface ContainerWrapper {
  hypervisor: string;
  vm: Container;
}

interface Container {
  id: string;
  hv: string;
  hostname: string;
  user: string;
  cpu: number;
  memory: number;
  nics: null;
  storages: null;
  created: Date;
  updated: Date;
  remarks: string;
  state: number;
  state_str: string;
  state_reason: string;
}

async function getUser(token: string) {
  const user = await fetch('http://10.10.9.4:3000/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
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
  const vms = await fetch('http://10.10.9.4:3000/virtual_machines/', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (vms.ok) {
    const json: ContainerWrapper[] = await vms.json();
    return json;
  } else {
    const json = await vms.json();
    throw new Error(json.error);
  }
}

export async function load({ parent, locals }: LayoutServerLoadEvent): Promise<{ user: User; containers: ContainerWrapper[] }> {
  // @ts-expect-error authenticated is defined in hooks.server.ts
  const { authenticated } = await parent();
  // @ts-expect-error defined
  const token: string = locals.user.token;

  if (!authenticated) {
    throw redirect(307, '/');
  }

  console.log((await getContainers(token))[0].vm);

  return {
    user: await getUser(token),
    containers: await getContainers(token),
  };
}
