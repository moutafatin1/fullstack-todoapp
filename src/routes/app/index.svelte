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
	import { MenuIcon } from '$root/components/icons';

	import { handleSidebar } from '$root/lib/stores/sideBar';

	export let user: string;
</script>

Hello from index
