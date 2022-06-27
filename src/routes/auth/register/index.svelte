<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ session, props }) => {
		if (session.user) {
			return {
				status: 302,
				redirect: '/protected'
			};
		}

		return { props };
	};
</script>

<script lang="ts">
	import NavLink from '$root/components/auth/NavLink.svelte';
	import Button from '$root/components/elements/button/Button.svelte';
	import TextInput from '$root/components/elements/form/TextInput.svelte';
	import { TextType } from '$root/components/elements/form/type';
	import { enhance } from '$root/lib/form';

	import { LockIcon, UserIcon, MailIcon } from '$root/components/icons';

	import { session } from '$app/stores';

	export let error: string;
	export let success: string;

	let username = '';
	let email = '';
	let password = '';
</script>

<NavLink />
<form
	use:enhance={{
		result: async ({ response }) => {
			$session.user = { username: 'Oussama casa' };
		},
		error: async ({ response }) => {
			error = (await response?.text()) ?? '';
		}
	}}
	method="post"
	class="flex flex-col items-center
	justify-center h-full space-y-7 w-full container px-10"
>
	<TextInput
		name="username"
		type={TextType.text}
		bind:value={username}
		icon={UserIcon}
		required
	/>
	<TextInput
		name="email"
		type={TextType.email}
		bind:value={email}
		icon={MailIcon}
		required
	/>
	<TextInput
		name="password"
		type={TextType.password}
		bind:value={password}
		icon={LockIcon}
		required
	/>
	{#if error}
		<p class="text-red-500">{error}</p>
	{/if}

	{#if success}
		<p class="text-green-500">Thank you for signing up!</p>
		<p><a href="/auth/login">You can log in.</a></p>
	{/if}
	<div class="flex flex-col space-y-2 text-center">
		<Button type="submit" size={'md'} class="rounded-full font-bold"
			>Sign Up</Button
		>
		<a
			href="/auth/login"
			class="text-gray-400 border-b border-gray-400 hover:text-primary hover:border-primary transition-colors md:text-lg"
			>I'm already member</a
		>
	</div>
</form>
