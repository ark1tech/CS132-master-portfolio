<script>
	import '../app.css';
	import { browser } from '$app/environment';
	import Loading from './loading.svelte';
	// import BeamBackground from '$lib/aceternity/components/BeamBackground.svelte';
	// import DotBackground from '$lib/aceternity/components/backgrounds/DotBackground.svelte';
	import NavBar from '$lib/components/global/nav/NavBar.svelte';
</script>

<NavBar class="sticky h-[7dvh]"/>
<div class="container">
	<main class="min-h-[93dvh]">
		<!-- {#if !browser}
			<Loading />
		{:else}
			<slot></slot>
		{/if} -->
		<slot></slot>
	</main>
</div>
