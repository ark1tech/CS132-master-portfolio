<script>
	import '../app.css';
	import { browser } from '$app/environment';
	import { ModeWatcher } from 'mode-watcher';
	import { dataStore } from '$lib/stores/dataStore.js';

	export let data;
	dataStore.set(data);

	import Loading from './loading.svelte';
	import NavBar from '$lib/components/global/nav/NavBar.svelte';
</script>

<ModeWatcher defaultMode={'dark'} />
{#if !true}
	<!-- <Loading /> -->
{:else}
	<NavBar class="sticky h-[7dvh]" />
	<div class="container">
		<main class="relative min-h-[93dvh]">
			<slot></slot>
		</main>
	</div>
{/if}
