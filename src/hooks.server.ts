import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
  // Check if the user is authenticated by seeing if the token cookie exists (truthy). In some
  // cases, it can also be a string with the content undefined, so we also check for that.
  const token = event.cookies.get('token');

  // @TODO Check token against Eve

  if (!token && token !== 'undefined') {
    // Session is undefined
    event.locals.token = '';
    event.locals.authenticated = false;
  } else {
    // User is authenticated
    event.locals.token = token;
    event.locals.authenticated = true;
  }

  return await resolve(event);
}) satisfies Handle;
