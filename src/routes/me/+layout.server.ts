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
  const { authenticated } = await parent();

  if (!authenticated) {
    throw redirect(307, '/');
  }

  // User should be authenticated at this point
  // Try and fetch their information from Eve
  try {
    const user = await fetch('http://localhost:3000/me', {
      headers: {
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
