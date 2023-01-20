import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
  const user = {
    authenticated: false,
    token: '',
  };

  // Check if user is authenticated by seeing if a token is stored in the cookies
  const session = event.cookies.get('token');

  // @todo Check if the token is in a valid format
  // Maybe also actually check if the user is validated with a request to Eve?

  if (session !== undefined && session !== 'undefined') {
    user.authenticated = true;
    user.token = session;
  } else {
    user.authenticated = false;
    user.token = '';
  }

  const response = await resolve({
    ...event,
    locals: {
      user,
    },
  });

  return response;
}) satisfies Handle;
