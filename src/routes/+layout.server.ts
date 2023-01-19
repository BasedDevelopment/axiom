import type { LayoutServerLoadEvent } from './$types'

export async function load(event: LayoutServerLoadEvent): Promise<{ authenticated: boolean }> {
  return {
    // @ts-expect-error user does in fact exist on locals type, as defined in hooks.server.ts
    authenticated: event.locals.user.authenticated,
  }
}

