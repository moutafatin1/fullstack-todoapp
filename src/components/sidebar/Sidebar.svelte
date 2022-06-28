<script>
	import { sideBarIsOpen } from '$lib/stores/sideBar';
	import clsx from 'clsx';
	import { CalendarIcon, InboxIcon, ListIcon } from '$root/components/icons';
	import Logo from '$root/components/Logo.svelte';
	import StarIcon from 'svelte-feather-icons/src/icons/StarIcon.svelte';
	import CloseButton from './CloseButton.svelte';
	import SearchInput from './SearchInput.svelte';
	import NavigationItem from './NavigationItem.svelte';
	import UserSidebar from './UserSidebar.svelte';

	const navigationItems = [
		{ name: 'Today', href: '/app/today', icon: CalendarIcon },
		{ name: 'Important', href: '/app/important', icon: StarIcon },
		{ name: 'All', href: '/app/all', icon: InboxIcon }
	];
</script>

<div
	class={clsx(
		'max-w-xs w-full h-full flex flex-col  shadow-md bg-darkGray  absolute   -translate-x-full transition-all md:-translate-x-0 md:static ',
		$sideBarIsOpen && '-translate-x-0'
	)}
>
	<div class="flex items-center justify-between px-2 py-4 mb-5">
		<Logo />
		<CloseButton />
	</div>
	<SearchInput />
	<ul class="space-y-2 border-b border-gray-500 pb-2">
		{#each navigationItems as item}
			<NavigationItem href={item.href} name={item.name} icon={item.icon} />
		{/each}
	</ul>
	<ul class="pt-5 space-y-2">
		<NavigationItem
			name="List 1"
			icon={ListIcon}
			href="/"
			class="text-gray-50 hover:bg-gray-400"
		/>
		<NavigationItem
			name="List 2"
			icon={ListIcon}
			href="/"
			class="text-gray-50 hover:bg-gray-400"
		/>
	</ul>
	<UserSidebar />
</div>
