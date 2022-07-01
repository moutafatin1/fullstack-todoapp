<script context="module" lang="ts">
	export const load: Load = async ({ session, props }) => {
		if (!session.user) {
			return {
				status: 301,
				redirect: '/auth/login'
			};
		}

		return { props };
	};
</script>

<script lang="ts">
	import Button from '$root/components/elements/button/Button.svelte';
	import TaskItem from '$root/components/task/TaskItem.svelte';
	import { enhance } from '$root/lib/form';
	import type { Task } from '@prisma/client';
	import type { Load } from '@sveltejs/kit';
	import { afterUpdate } from 'svelte';

	export let tasks: Task[];

	let ulElement: HTMLUListElement;
	$: if (tasks) {
		afterUpdate(() => {
			scrollToBottom(ulElement);
		});
	}

	const scrollToBottom = (node: HTMLUListElement) => {
		node?.scroll({ top: node.scrollHeight, behavior: 'smooth' });
	};
</script>

<div
	class="mx-5 flex flex-col justify-between h-[92vh] md:h-screen md:py-10  md:mt-0  "
>
	<ul
		class="space-y-4 overflow-y-auto  px-5 mt-24 md:mt-7"
		use:scrollToBottom
		bind:this={ulElement}
	>
		{#each tasks as task}
			<TaskItem {task} />
		{/each}
	</ul>
	<form
		class="relative mt-5 "
		method="post"
		use:enhance={{
			result: ({ form }) => {
				form.reset();
			}
		}}
	>
		<input
			type="text"
			name="task"
			placeholder="Write you task..."
			class="w-full px-7 py-4 rounded-full border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:border-primary font-bold placeholder:text-gray-400 text-gray-700 "
		/>
		<Button class="absolute right-0 top-0 rounded-full h-full">Add</Button>
	</form>
</div>

<style>
	ul::-webkit-scrollbar-track {
		border-radius: 10px;
		background-color: #f5f5f5;
	}

	ul::-webkit-scrollbar {
		width: 12px;
		background-color: #f5f5f5;
	}

	ul::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #d5d8d8;
	}
</style>
