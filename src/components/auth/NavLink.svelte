<script lang="ts">
	import { page } from '$app/stores';
	import clsx from 'clsx';
	import { HomeIcon } from '../icons';
</script>

<div class="mt-5 flex items-center justify-between px-2 md:px-5 w-full">
	<a href="/">
		<HomeIcon
			class="h-10 w-10 text-gray-300 hover:text-gray-500 hover:scale-95 transition-all"
		/>
	</a>
	<div class="flex">
		<a
			href="/auth/login"
			class={clsx(
				' text-gray-100 shadow-md px-5 py-2 rounded-l-full drop-shadow-md transition-colors md:text-lg',
				$page.url.pathname === '/auth/login'
					? 'bg-primary'
					: 'bg-gray-500 hover:bg-primary'
			)}>Sign In</a
		>
		<a
			href="/auth/register"
			class={clsx(
				'text-gray-100 shadow-md px-5 py-2 rounded-r-full drop-shadow-md transition-colors md:text-lg ',
				$page.url.pathname === '/auth/register'
					? 'bg-primary'
					: 'bg-gray-500 hover:bg-primary'
			)}>Sign Up</a
		>
	</div>
</div>
