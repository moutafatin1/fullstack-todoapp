<script>
	import { goto } from '$app/navigation';

	import { CheckSquareIcon } from './icons';
</script>

<div
	class="flex items-center space-x-2 text-2xl text-primary cursor-pointer"
	on:click={() => goto('/')}
>
	<CheckSquareIcon class="h-10 w-10" />
	<span class="text-gray-300 pointer-events-none">Epic Todo</span>
</div>
