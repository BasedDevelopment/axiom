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

export async function load({ parent, locals }: LayoutServerLoadEvent): Promise<{ user: User }> {
  // @ts-expect-error authenticated is defined in hooks.server.ts
  const { authenticated } = await parent();

  if (!authenticated) {
    throw redirect(307, '/');
  }

  // User should be authenticated at this point
  // Try and fetch their information from Eve
  try {
    const user = await fetch('http://10.10.9.4:3000/me', {
      headers: {
        // @ts-expect-error user is defined in hooks.server.ts
        Authorization: `Bearer ${locals.user.token}`
      }
    });

    if (user.ok) {
      const json: User = await user.json();

      return {
        user: json
      };
    }
  } catch (error) {
    console.error(error);
  }

  return {
    user: {
      created: '',
      email: '',
      id: '',
      last_login: '',
      name: '',
      updated: '',
    }
  }
}
