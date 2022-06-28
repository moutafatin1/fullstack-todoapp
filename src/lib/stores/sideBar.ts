import { writable } from 'svelte/store';

export const sideBarIsOpen = writable(false);

export const handleSidebar = () => {
	sideBarIsOpen.update((state) => !state);
};
