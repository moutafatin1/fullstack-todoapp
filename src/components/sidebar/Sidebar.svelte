<script>
	import { sideBarIsOpen } from '$lib/stores/sideBar';
	import {
		CalendarIcon,
		HomeIcon,
		InboxIcon,
		ListIcon
	} from '$root/components/icons';
	import Logo from '$root/components/Logo.svelte';
	import clsx from 'clsx';
	import StarIcon from 'svelte-feather-icons/src/icons/StarIcon.svelte';
	import CloseButton from './CloseButton.svelte';
	import NavigationItem from './NavigationItem.svelte';
	import SearchInput from './SearchInput.svelte';
	import UserSidebar from './UserSidebar.svelte';

	const navigationItems = [
		{ name: 'Home', href: '/app', icon: HomeIcon },
		{ name: 'Today', href: '/app/today', icon: CalendarIcon },
		{ name: 'Important', href: '/app/important', icon: StarIcon },
		{ name: 'All', href: '/app/all', icon: InboxIcon }
	];
</script>

<div
	class={clsx(
		'max-w-xs w-full h-full flex flex-col  shadow-md bg-darkGray  absolute   -translate-x-full transition-all md:-translate-x-0 md:static z-40 px-3',
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
			href="/app/collections/1"
			class="text-gray-50 hover:bg-gray-400"
			isCollection
		/>
		<NavigationItem
			name="List 2"
			icon={ListIcon}
			href="/app/collections/2"
			class="text-gray-50 hover:bg-gray-400"
			isCollection
		/>
	</ul>
	<UserSidebar />
</div>
