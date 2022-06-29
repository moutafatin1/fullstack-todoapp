<script lang="ts">
	import { MenuIcon } from '$root/components/icons';

	import Sidebar from '$root/components/sidebar/Sidebar.svelte';
	import { handleSidebar } from '$root/lib/stores/sideBar';
</script>

<div class="flex  h-screen">
	<!-- Mobile Sidebar -->

	<Sidebar />
	<!-- Desktop Sidebar -->

	<main>
		<div class="flex  p-2 md:hidden">
			<button
				on:click={handleSidebar}
				class="focus:ring-2 focus:ring-gray-500 focus:outline-none rounded-md"
			>
				<MenuIcon
					class="h-8 w-8 cursor-pointer hover:text-gray-500 active:scale-95 "
				/>
			</button>
		</div>
		<div>
			<slot />
		</div>
	</main>
</div>
