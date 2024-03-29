// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    token: string;
    authenticated: boolean;
  }
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}

declare module '*.json' {
  const value: Record<unknown, unknown> | unknown[];
  export default value;
}

declare module '$env/static/public' {
  const AXIOM_INSTANCE: string;
  const AXIOM_SECURE: string;
}
