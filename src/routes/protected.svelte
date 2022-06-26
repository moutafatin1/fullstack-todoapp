<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ session, props }) => {
		if (!session.user) {
			return {
				status: 302,
				redirect: '/auth/login'
			};
		}

		return {
			status: 200,
			props: {
				user: session.user.username
			}
		};
	};
</script>

<script lang="ts">
	export let user: string;
</script>

<h1 class="text-purple-500 text-3xl font-semibold">
	Protected Route: Hello <span class="text-blue-600 font-bold text-4xl"
		>{user}</span
	>
</h1>
