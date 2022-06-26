<script lang="ts">
	import { page } from '$app/stores';
	import clsx from 'clsx';
</script>

<div class="mt-5 flex md:self-end md:pr-10">
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
