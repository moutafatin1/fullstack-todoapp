<script>
	import { LogOutIcon } from '../icons';
</script>

<div
	class="mt-auto w-full h-20 flex items-center justify-between  pl-3 pr-2 my-2 sm:pb-5"
>
	<div class="flex items-center space-x-2">
		<img
			src="https://pm1.narvii.com/7759/62da9330b3f0121e0fa1c8001d72c7792f288e56r1-1365-2048v2_hq.jpg"
			alt="profile pic"
			class="h-14 w-14 rounded-full object-cover"
		/>
		<p class="flex flex-col text-lg">
			<span class="text-gray-100">Full name</span>
			<span class="text-base text-gray-400">email@gmail.com</span>
		</p>
	</div>
	<button
		class=" rounded-lg text-gray-300  p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 hover:text-primary"
	>
		<LogOutIcon class="h-6 w-6" />
	</button>
</div>
