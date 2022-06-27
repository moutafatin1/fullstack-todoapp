<script>
	import Button from '$root/components/elements/button/Button.svelte';
	import { session } from '$app/stores';
	import { enhance } from '$lib/form';
	import { CheckSquareIcon } from '$root/components/icons';
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="favicon.svg" />
</svelte:head>

<main class="h-screen bg-darkGray bg-wavesSvg bg-no-repeat bg-bottom">
	<nav
		class="flex items-center justify-between container mx-auto px-5 md:px-0 pt-5"
	>
		<div class="flex items-center space-x-2 text-2xl text-primary ">
			<CheckSquareIcon class="h-10 w-10" />
			<span class="text-gray-300 pointer-events-none">Epic Todo</span>
		</div>
		<div class="flex  items-center space-x-2 ">
			{#if !$session.user}
				<a
					href="/auth/register"
					class="text-lg text-gray-300 hover:text-gray-500 transition-colors font-bold pr-3"
					>Sign Up</a
				>
				<a href="/auth/login">
					<Button class="rounded-full focus:outline-none font-bold"
						>Sign In</Button
					>
				</a>
			{:else}
				<a href="/dashboard"
					><Button class="rounded-full font-bold">Dashboard</Button></a
				>
				<form
					use:enhance={{
						result: () => {
							$session.user = undefined;
						}
					}}
					method="post"
					action="/auth/logout"
				>
					<Button variant="outline" class="rounded-full font-bold"
						>Logout</Button
					>
				</form>
			{/if}
		</div>
	</nav>

	<div
		class="mt-40 px-5 space-y-5 lg:grid grid-cols-2 container mx-auto items-center "
	>
		<div class="flex flex-col space-y-5 items-center text-center">
			<h2 class="text-4xl font-bold text-primary">Epic Todolist</h2>
			<p class="text-xl text-gray-200 ">
				Keep track of the daily task in life ang get that satisfaction upon
				completion
			</p>
			<a href="/auth/register"
				><Button class="rounded-full font-bold">Get Started</Button></a
			>
		</div>
		<img src="/addTaskHero.svg" alt="Add Task" />
	</div>
</main>
