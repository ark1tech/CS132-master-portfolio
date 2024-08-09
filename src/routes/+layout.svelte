<script>
	import '../app.css';
	import { browser } from '$app/environment';
	import { ModeWatcher } from 'mode-watcher';
	import { dataStore } from '$lib/stores/dataStore.js';

	export let data;
	dataStore.set(data);

	import Loading from './loading.svelte';
	import NavBar from '$components/global/nav/NavBar.svelte';

</script>

<ModeWatcher defaultMode={'dark'} />
<NavBar class="sticky h-[7dvh]"/>
{#if !browser}
	<Loading />
{:else}
	<slot />
{/if}
