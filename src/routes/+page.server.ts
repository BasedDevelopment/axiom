import { redirect } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types'

export async function load({ parent }: PageServerLoadEvent) {
  const { authenticated } = await parent();

  if (authenticated) {
    throw redirect(307, '/me');
  }
}
