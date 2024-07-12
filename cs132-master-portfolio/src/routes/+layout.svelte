<script>
	import '../app.css';
	// import BeamBackground from '$lib/aceternity/components/BeamBackground.svelte';
	import DotBackground from '$lib/aceternity/components/backgrounds/DotBackground.svelte';
</script>

<DotBackground>
	<div class="container">
		<main class="min-h-[100dvh]">
			<slot></slot>
		</main>
	</div>
</DotBackground>
