import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoadEvent } from '../$types';

export async function load({ parent }: LayoutServerLoadEvent) {
  const { authenticated } = await parent();

  if (!authenticated) {
    throw redirect(307, '/');
  }
}
