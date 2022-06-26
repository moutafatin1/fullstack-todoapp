<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ session, props }) => {
		if (session.user) {
			return {
				status: 302,
				redirect: '/'
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
	import { send } from '$lib/api';

	import MailIcon from 'svelte-feather-icons/src/icons/MailIcon.svelte';
	import LockIcon from 'svelte-feather-icons/src/icons/LockIcon.svelte';
	import UserIcon from 'svelte-feather-icons/src/icons/UserIcon.svelte';

	export let error: string;
	export let success: string;
	async function register(event: SubmitEvent) {
		error = '';

		const formEl = event.target as HTMLFormElement;
		const response = await send(formEl);

		if (response.error) {
			error = response.error;
		}

		if (response.success) {
			success = response.success;
		}

		formEl.reset();
	}

	let username = '';
	let email = '';
	let password = '';
</script>

<NavLink />
<form
	on:submit|preventDefault={register}
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
