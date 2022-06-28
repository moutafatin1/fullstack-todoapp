<script>
	import { MenuIcon } from '$root/components/icons';

	import { handleSidebar } from '$root/lib/stores/sideBar';
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
	<h1>Hello to you dashboard</h1>
</main>
