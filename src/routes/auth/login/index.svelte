<script lang="ts">
	import NavLink from '$root/components/auth/NavLink.svelte';
	import Button from '$root/components/elements/button/Button.svelte';
	import TextInput from '$root/components/elements/form/TextInput.svelte';

	import { TextType } from '$root/components/elements/form/type';
	import clsx from 'clsx';
	import { Mail, Lock } from 'lucide-svelte';
	const active: string = 'signin';
	let username = '';
	let password = '';
</script>

<main class="flex flex-col items-center h-screen bg-darkGray ">
	<NavLink />
	<form
		class="flex flex-col items-center
	justify-center h-full space-y-7 w-full px-10"
	>
		<TextInput
			name="username"
			type={TextType.text}
			bind:value={username}
			icon={Mail}
		/>
		<TextInput
			name="password"
			type={TextType.text}
			bind:value={password}
			icon={Lock}
		/>
		<div class="flex flex-col space-y-2 text-center">
			<Button size={'md'} class="rounded-full font-bold">Sign In</Button>
			<a
				href="/auth/login"
				class="text-gray-400 border-b border-gray-400 hover:text-primary hover:border-primary transition-colors md:text-lg "
				>Create New Account</a
			>
		</div>
	</form>
</main>
