<script lang="ts">
	import clsx from 'clsx';

	import type { SvelteComponent } from 'svelte';

	export let href: string;
	export let icon: typeof SvelteComponent;
	export let name: string;
</script>

<li>
	<a
		{href}
		class={clsx(
			'flex items-center mx-2 space-x-2 text-xl font-semibold text-primary cursor-pointer p-2 rounded-full transition-colors hover:text-darkGray hover:bg-primary',
			$$props.class
		)}
	>
		<svelte:component this={icon} class="h-6 w-6" />
		<span>{name}</span>
	</a>
</li>
