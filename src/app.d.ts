import type { TypedPocketBase } from '../pocketbase-types';
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      pb: TypedPocketBase;
      user: import('pocketbase').default['authStore']['model'];
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
