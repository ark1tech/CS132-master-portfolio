<script>
	import '../app.css';
	import BeamBackground from '$lib/aceternity/components/BeamBackground.svelte';
</script>

<BeamBackground>
	<div class="container">
		<main class="min-h-[100dvh]">
			<slot></slot>
		</main>
	</div>
</BeamBackground>
