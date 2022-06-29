<script>
	import { goto } from '$app/navigation';

	import { session } from '$app/stores';
	import { enhance } from '$root/lib/form';

	import { LogOutIcon } from '../icons';
</script>

<div
	class="mt-auto w-full h-20 flex items-center justify-between  pl-3 pr-2 my-2 sm:pb-5"
>
	<div class="flex items-center space-x-2">
		<img
			src={$session.user?.avatarUrl ?? '/userDefaultAvatar.jpg'}
			alt="profile pic"
			class="h-14 w-14 rounded-full object-cover"
		/>
		<p class="flex flex-col text-lg">
			<span class="text-gray-100 capitalize font-semibold"
				>{$session.user?.username}</span
			>
			<span class="text-base text-gray-400">{$session.user?.email ?? ''}</span>
		</p>
	</div>
	<form
		use:enhance={{
			pending: async () => {
				await goto('/');
			},
			result: () => {
				$session.user = undefined;
			}
		}}
		method="post"
		action="/auth/logout"
	>
		<button
			class=" rounded-lg text-gray-300  p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 hover:text-primary"
		>
			<LogOutIcon class="h-6 w-6" />
		</button>
	</form>
</div>
