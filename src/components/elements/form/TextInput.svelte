<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { TextType } from './type';
	import clsx from 'clsx';

	// interface $$Props extends Partial<HTMLInputElement> {
	// 	required?: boolean;
	// 	name: string;
	// 	value: string;
	// 	type: TextType;
	// 	icon?: typeof SvelteComponent;
	// 	class?: string;
	// }

	export let name: string;
	export let type: TextType;
	export let value: string = '';
	export let icon: typeof SvelteComponent | undefined = undefined;
	export let required: boolean = false;

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<div class="relative flex items-center text-gray-400 w-full">
	<svelte:component this={icon} class="absolute left-0" />
	<input
		bind:value
		type="text"
		{name}
		placeholder={name}
		class={clsx(
			'w-full pl-8 py-2 bg-transparent border-b border-gray-400  text-gray-50 font-bold placeholder:font-normal hover:border-primary focus:outline-none focus:border-primary placeholder:capitalize',
			$$props.class
		)}
		{required}
		use:typeAction
	/>
</div>
