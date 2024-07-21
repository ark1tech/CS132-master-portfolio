<script>
	import '../app.css';
	import { browser } from '$app/environment';
	import { ModeWatcher } from 'mode-watcher';
	import { dataStore } from '$lib/stores/dataStore.js';

	export let data;
	dataStore.set(data);

	import Loading from './loading.svelte';
	import NavBar from '$components/global/nav/NavBar.svelte';
	import Spotlight from '$components/library/aceternity/components/backgrounds/Spotlight.svelte';
</script>

<ModeWatcher defaultMode={'dark'} />
{#if !true}
	<!-- <Loading /> -->
{:else}
	<NavBar class="sticky h-[7dvh]" />
	<div class="container relative">
		<main class="relative min-h-[93dvh]">
			<slot></slot>
		</main>
	</div>
{/if}

<style>
	@media (width < 768px) {
		main {
			contain: paint;
		}
	}
</style>
