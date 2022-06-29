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

<main class="h-screen w-full">
	<div class="flex justify-end p-2 md:hidden">
		<button
			on:click={handleSidebar}
			class="focus:ring-2 focus:ring-gray-500 focus:outline-none rounded-md"
		>
			<MenuIcon
				class="h-8 w-8 cursor-pointer hover:text-gray-500 active:scale-95 "
			/>
		</button>
	</div>
	<h1>Hello to you dashboard {user}</h1>
</main>
