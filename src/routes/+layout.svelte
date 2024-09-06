<script>
	import '../app.css';
	import { browser } from '$app/environment';
	import { ModeWatcher } from 'mode-watcher';
	import { dataStore } from '$lib/stores/dataStore.js';

	export let data;
	dataStore.set(data);

	import Loading from './loading.svelte';
	import NavBar from '$components/global/nav/NavBar.svelte';
	import PilipiNutsLogo from '$assets/logo/logo-plain-green.svg';
</script>

<ModeWatcher defaultMode={'dark'} />
<NavBar class="sticky h-[7dvh]" />
{#if !browser}
	<Loading />
{:else}
	<slot />
{/if}
<!-- About Us section -->
<div class="container relative !min-h-[20dvh] bg-black">
	<div class="relative h-[1px] overflow-hidden">
		<div class="h-[1px] border-t-[1px] border-t-[#7f7f7f60]"></div>
		<div
			class="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-black via-black sm:w-[5%]"
		></div>
		<div
			class="pointer-events-none absolute inset-y-0 right-0 w-0 bg-gradient-to-l from-black via-black sm:w-[5%]"
		></div>
	</div>
	<nav class="relative flex min-h-[20dvh] flex-col justify-between py-[4rem]">
		<div
			class="relative z-50 flex h-full flex-col items-center justify-between gap-[1rem] bg-black px-[1rem] sm:px-[4rem] md:flex-row"
		>
			<div class="flex w-fit flex-row items-center gap-[0.5rem]">
				<img src={PilipiNutsLogo} alt="PilipiNuts Logo" class="h-[20px] w-auto" />
				<p class="mono-text text-[#989898]">PilipiNuts</p>
				<p class="sans-text text-[#989898]">©</p>
				<p class="mono-text text-[#989898]">
					{new Date().getFullYear()}
				</p>
			</div>
			<div class="flex flex-col items-end gap-[0.5rem]">
				<a class="mono-text text-[#989898]" href="/bts">Made by</a>
			</div>
		</div>
	</nav>
</div>
