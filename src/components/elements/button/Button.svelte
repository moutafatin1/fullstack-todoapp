<script lang="ts">
	import clsx from 'clsx';
	import Spinner from '../spinner/Spinner.svelte';

	interface $$Props extends Partial<HTMLButtonElement> {
		// type: 'submit' | 'button';
		size?: keyof typeof sizes;
		variant?: keyof typeof variants;
		isLoading?: boolean;
		class?: string;
	}

	// export let type: 'submit' | 'button' = 'button';
	export let size: keyof typeof sizes = 'md';
	export let variant: keyof typeof variants = 'primary';
	export let isLoading = false;

	const sizes = {
		sm: 'py-2 px-4 text-sm',
		md: 'py-3 px-6 text-md',
		lg: 'py-3 px-8 text-lg'
	};
	const variants = {
		primary:
			'bg-primary text-white hover:bg-primary/70 focus:ring-primary disabled:bg-primary disabled:text-white active:scale-90',
		outline:
			'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary disabled:bg-gray-200 disabled:text-primary active:scale-90',
		danger:
			'bg-red-500 text-white hover:bg-red-500/70  focus:ring-red-300 disabled:bg-red-600 disabled:text-white active:scale-90'
	};
</script>

<button
	{...$$restProps}
	on:click
	class={clsx(
		'flex justify-center text-lg items-center shadow-md  transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed',
		sizes[size],
		variants[variant],
		$$props.class
	)}
>
	{#if isLoading} <Spinner size="md" /> {/if}
	{#if !isLoading}
		<slot name="startIcon" />
	{/if}
	<span class="mx-2"><slot /></span>
	{#if !isLoading}
		<slot name="endIcon" />
	{/if}
</button>
