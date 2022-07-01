<script lang="ts">
	import { MenuIcon } from '$root/components/icons';

	import Sidebar from '$root/components/sidebar/Sidebar.svelte';
	import { handleSidebar } from '$root/lib/stores/sideBar';
</script>

<div class="flex  h-screen">
	<!-- Mobile Sidebar -->

	<Sidebar />
	<!-- Desktop Sidebar -->

	<main class="h-screen w-full">
		<div
			class="flex flex-col justify-center fixed w-full p-2  bg-gray-500/50   md:h-16 "
		>
			<button
				on:click={handleSidebar}
				class="focus:ring-2 focus:ring-gray-500 focus:outline-none rounded-md w-fit md:hidden"
			>
				<MenuIcon
					class="h-8 w-8 cursor-pointer hover:text-gray-500 active:scale-95 "
				/>
			</button>
			<h1 class="text-2xl text-gray-800 font-bold">All Tasks</h1>
		</div>
		<div class="mt-6 md:mt-0">
			<slot />
		</div>
	</main>
</div>
