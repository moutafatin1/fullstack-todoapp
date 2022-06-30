<script lang="ts">
	import TaskItem from '$root/components/task/TaskItem.svelte';
	import type { Task } from '@prisma/client';

	export let tasks: Task[];
</script>

<ul class="space-y-4 mt-5">
	{#each tasks as task}
		<TaskItem {task} />
	{/each}
</ul>
