<script context="module" lang="ts">
</script>

<script lang="ts">
	import NavLink from '$root/components/auth/NavLink.svelte';
	import Button from '$root/components/elements/button/Button.svelte';
	import TextInput from '$root/components/elements/form/TextInput.svelte';
	import { TextType } from '$root/components/elements/form/type';
	import { User, Mail, Lock } from 'lucide-svelte';

	let username = '';
	let email = '';
	let password = '';
</script>

<NavLink />
<form
	class="flex flex-col items-center
	justify-center h-full space-y-7 w-full container px-10"
>
	<TextInput
		name="username"
		type={TextType.text}
		bind:value={username}
		icon={User}
	/>
	<TextInput
		name="email"
		type={TextType.email}
		bind:value={email}
		icon={Mail}
	/>
	<TextInput
		name="password"
		type={TextType.password}
		bind:value={password}
		icon={Lock}
	/>
	<div class="flex flex-col space-y-2 text-center">
		<Button size={'md'} class="rounded-full font-bold">Sign Up</Button>
		<a
			href="/auth/login"
			class="text-gray-400 border-b border-gray-400 hover:text-primary hover:border-primary transition-colors md:text-lg"
			>I'm already member</a
		>
	</div>
</form>
