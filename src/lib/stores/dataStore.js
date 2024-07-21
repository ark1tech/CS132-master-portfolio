import { writable } from 'svelte/store';

export const dataStore = writable({ projects: {}, sdg: {} });
export const imgStore = writable({});
