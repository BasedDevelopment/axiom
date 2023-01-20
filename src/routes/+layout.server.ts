import type { LayoutServerLoad } from './$types';

export const load = (({ locals }) => {
  return {
    // @ts-expect-error defined
    authenticated: locals.authenticated,
  };
}) satisfies LayoutServerLoad;
