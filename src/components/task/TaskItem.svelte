<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';

	import { enhance } from '$root/lib/form';

	import type { Task } from '@prisma/client';

	import clsx from 'clsx';
	import { Trash2Icon } from '../icons';

	import StarIcon from './StarIcon.svelte';
	export let task: Task;
</script>

<li
	class={clsx(
		'bg-primary px-7 py-4 flex items-center justify-between  rounded-lg',
		task.isCompleted && 'bg-gray-400'
	)}
>
	<div class="flex space-x-3 items-center">
		<form
			action={`/app/all/${task.id}?_method=patch`}
			method="post"
			use:enhance={{
				result: () => {
					task.isCompleted = !task.isCompleted;
				}
			}}
			class="relative"
		>
			<input
				checked={task.isCompleted}
				type="checkbox"
				class="rounded-full p-3 focus:ring-green-500 text-green-600 h-7 w-7"
			/>
			<input
				type="submit"
				name="formSubmit"
				value="Sub"
				class="absolute h-7 w-7 border-2 rounded-full left-0 opacity-0 cursor-pointer"
			/>
			<input type="hidden" name="isCompleted" value={task.isCompleted} />
		</form>
		<span
			class={clsx(
				'font-medium text-xl text-gray-700 break-all',
				task.isCompleted && 'text-gray-500 line-through'
			)}>{task.body}</span
		>
	</div>
	<div class="flex items-center space-x-3">
		<form
			action={`/app/all/${task.id}?_method=patch`}
			method="post"
			use:enhance={{
				result: () => {
					task.isImportant = !task.isImportant;
				}
			}}
		>
			<input
				type="hidden"
				name="isImportant"
				value={task.isImportant ? 'true' : 'false'}
			/>
			<button class="rounded-lg   p-1">
				<StarIcon
					height="40"
					width="40"
					color="#fff"
					isImportant={task.isImportant}
				/>
			</button>
		</form>
		<form
			action={`/app/all/${task.id}?_method=delete`}
			method="post"
			use:enhance={{
				result: () => {
					invalidate(`${$page.url.href}`);
				}
			}}
		>
			<button class="rounded-lg   p-1">
				<Trash2Icon
					class="h-9 w-9 mt-1 text-gray-50 hover:text-red-500 transition-colors"
				/>
			</button>
		</form>
	</div>
</li>
