<script lang="ts">
	import { enhance } from '$root/lib/form';

	import type { Task } from '@prisma/client';

	import clsx from 'clsx';

	import StarIcon from './StarIcon.svelte';
	export let task: Task;
</script>

<li
	class={clsx(
		'bg-primary px-7 py-4 flex items-center justify-between mx-5 rounded-lg',
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
				'font-medium text-xl text-gray-700',
				task.isCompleted && 'text-gray-500 line-through'
			)}>{task.body}</span
		>
	</div>
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
		<button
			class="rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none p-1"
		>
			<StarIcon
				height="40"
				width="40"
				color="#fff"
				isImportant={task.isImportant}
			/>
		</button>
	</form>
</li>
