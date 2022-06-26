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
	import { session } from '$app/stores';

	import NavLink from '$root/components/auth/NavLink.svelte';
	import Button from '$root/components/elements/button/Button.svelte';
	import TextInput from '$root/components/elements/form/TextInput.svelte';

	import { TextType } from '$root/components/elements/form/type';
	import { send } from '$root/lib/api';
	import LockIcon from 'svelte-feather-icons/src/icons/LockIcon.svelte';
	import UserIcon from 'svelte-feather-icons/src/icons/UserIcon.svelte';

	export let error;

	async function login(event: SubmitEvent) {
		const formEl = event.target as HTMLFormElement;
		const response = await send(formEl);

		if (response.error) {
			error = response.error;
		}

		$session.user = response.user;
		formEl.reset();
	}
	let username = '';
	let password = '';
</script>

<NavLink />
<form
	on:submit|preventDefault={login}
	method="post"
	class="flex flex-col items-center
	justify-center h-full space-y-7 w-full max-w-2xl px-10"
>
	<TextInput
		name="username"
		type={TextType.text}
		bind:value={username}
		icon={UserIcon}
		required
	/>
	<TextInput
		name="password"
		type={TextType.password}
		bind:value={password}
		icon={LockIcon}
	/>
	<div class="flex flex-col space-y-2 text-center">
		<Button type="submit" size="md" class="rounded-full font-bold"
			>Sign In</Button
		>
		<a
			href="/auth/login"
			class="text-gray-400 border-b border-gray-400 hover:text-primary hover:border-primary transition-colors md:text-lg "
			>Create New Account</a
		>
	</div>
</form>
