<script lang="ts">
	import { page } from '$app/stores';
	import { handleSidebar } from '$root/lib/stores/sideBar';

	import clsx from 'clsx';

	import type { SvelteComponent } from 'svelte';

	export let href: string;
	export let icon: typeof SvelteComponent;
	export let name: string;
	export let isCollection: boolean = false;
</script>

<li on:click={handleSidebar}>
	<a
		{href}
		class={clsx(
			'flex items-center mx-2 space-x-2 text-xl font-semibold text-primary cursor-pointer p-2 rounded-full transition-colors hover:text-darkGray hover:bg-primary',
			$$props.class,
			$page.url.pathname === href && 'bg-primary text-darkGray',
			$page.url.pathname === href && isCollection && 'bg-gray-400'
		)}
	>
		<svelte:component this={icon} class="h-6 w-6" />
		<span>{name}</span>
	</a>
</li>
