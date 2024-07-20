<script>
	import { cn } from '$lib/utils';
	import LogoMark from '$components/global/LogoMark.svelte';

	export let className = undefined;
	export { className as class };

	const navItems = ['About', 'Projects', 'Contact Us'];
</script>

<nav class={cn('top-0 z-50 flex flex-col', className)}>
	<div class="relative h-full z-50 flex flex-row items-center bg-black sm:px-[4rem] px-[1rem]">
		<LogoMark />
		<div class="flex flex-grow flex-row justify-end gap-[2rem]">
			{#each navItems as item}
				<p class="mono-text text-[#989898]">{item}</p>
			{/each}
		</div>
	</div>
	<div class="h-[1px] border-b-[1px] border-b-[#7f7f7f60]"></div>
	<div
		class="pointer-events-none absolute inset-y-0 left-0 sm:w-[5%] w-0 bg-gradient-to-r from-black via-black"
	></div>
	<div
		class="pointer-events-none absolute inset-y-0 right-0 sm:w-[5%] w-0 bg-gradient-to-l from-black via-black"
	></div>
</nav>

<style>
	/* * {
		border: 0.1px solid red;
	} */
</style>
