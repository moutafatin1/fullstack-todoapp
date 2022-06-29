<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ session, props }) => {
		if (session.user) {
			return {
				status: 302,
				redirect: '/app'
			};
		}

		return { props };
	};
</script>

<script lang="ts">
	import { session } from '$app/stores';

	import Button from '$root/components/elements/button/Button.svelte';
	import TextInput from '$root/components/elements/form/TextInput.svelte';
	import { TextType } from '$root/components/elements/form/type';

	import { LockIcon, UserIcon } from '$root/components/icons';

	import { enhance } from '$lib/form';

	export let errors: {
		username: string;
		password: string;
		error: string;
	};
</script>

<form
	use:enhance={{
		result: async ({ response }) => {
			$session.user = (await response.json()).user;
		},
		error: async ({ response }) => {
			errors = (await response?.json()).errors;
		}
	}}
	method="post"
	class="flex flex-col items-center
	justify-center h-full space-y-7 w-full container px-10"
>
	<TextInput name="username" type={TextType.text} icon={UserIcon} required />
	{#if errors?.error}
		<p class="text-red-500">{errors.error}</p>
	{/if}
	{#if errors?.username}
		<p class="text-red-500">{errors.username}</p>
	{/if}
	<TextInput name="password" type={TextType.password} icon={LockIcon} />
	{#if errors?.password}
		<p class="text-red-500">{errors.password}</p>
	{/if}
	<div class="flex flex-col space-y-2 text-center">
		<Button type="submit" size="md" class="rounded-full font-bold"
			>Sign In</Button
		>
		<a
			href="/auth/register"
			class="text-gray-400 border-b border-gray-400 hover:text-primary hover:border-primary transition-colors md:text-lg "
			>Create New Account</a
		>
	</div>
</form>
