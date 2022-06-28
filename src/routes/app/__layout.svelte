<script lang="ts">
	import Sidebar from '$root/components/sidebar/Sidebar.svelte';
</script>

<div class="flex  h-screen">
	<!-- Mobile Sidebar -->

	<Sidebar />
	<!-- Desktop Sidebar -->

	<slot />
</div>
