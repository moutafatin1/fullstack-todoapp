/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	interface Locals {
		user?: {
			id: string;
			username: string;
			avatarUrl: string;
			email: string | null;
		};
	}
	// interface Platform {}
	interface Session {
		user?: {
			id: string;
			username: string;
			avatarUrl: string;
			email: string | null;
		};
	}
	// interface Stuff {}
}
