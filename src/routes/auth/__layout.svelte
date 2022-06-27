<div class="grid lg:grid-cols-2">
	<div
		class="hidden bg-gradient-to-b from-primaryLight via-primary to-primaryLight  text-center justify-center items-center space-y-7 flex-col pt-24 lg:flex"
	>
		<h1 class="text-gray-50 font-bold text-4xl ">
			Welcome To My Awesome Todo Application
		</h1>
		<img src="/taskSvg.svg" alt="" class="w-1/2 drop-shadow-lg" />
	</div>
	<main class="flex flex-col items-center h-screen bg-darkGray ">
		<slot />
	</main>
</div>
