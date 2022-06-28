<script>
	import { handleSidebar } from '$root/lib/stores/sideBar';
	import { MenuIcon } from '../icons';
</script>

<button
	on:click={handleSidebar}
	class=" rounded-md hover:bg-transparent border-2 border-transparent transition-colors border-gray-500  active:scale-95 hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 md:hidden"
>
	<MenuIcon
		class="h-8 w-8 p-1 transition-colors text-gray-400 hover:text-gray-50"
	/>
</button>
