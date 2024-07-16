<script>
	export let showFade = true;
</script>

<div class="relative -z-10 flex items-center justify-center gradient-mask-r-70 bg-transparent bg-grid-dash-[#232323]/[0.7]">
	<!-- Radial gradient for the container to give a faded look -->
	{#if showFade}
		<div
			class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_right,transparent_20%,black_70%)]"
		></div>
	{/if}
	<slot />
</div>	
