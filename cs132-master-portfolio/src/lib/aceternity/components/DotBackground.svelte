<script>
	export let showFade = true;
</script>

<div
	class="bg-dot-white/[0.1] relative flex items-center justify-center bg-black"
>
	<!-- Radial gradient for the container to give a faded look -->
	{#if showFade}
		<div
			class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
		></div>
	{/if}
	<slot />
</div>
