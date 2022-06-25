<script lang="ts">
	import clsx from 'clsx';
	const sizes = {
		sm: 'h-4 w-4',
		md: 'h-7 w-7',
		lg: 'h-16 w-16',
		xl: 'h-24 w-24'
	};

	const variants = {
		light: 'text-white',
		primary: 'text-primary'
	};

	export let size: keyof typeof sizes = 'md';
	export let variant: keyof typeof variants = 'primary';
</script>

<svg
	class={clsx(
		'animate-spin text-current',
		sizes[size],
		variants[variant],
		$$props.class
	)}
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	data-testid="loading"
>
	<circle
		class="opacity-25"
		cx="12"
		cy="12"
		r="10"
		stroke="currentColor"
		stroke-width="4"
	/>
	<path
		class="opacity-75"
		fill="currentColor"
		d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
	/>
</svg>
<span class="sr-only">Loading</span>
