<script>
	export let showFade = true;
</script>

<div
	class="bg-dot-[#494949]/[0.5] relative flex items-center justify-center bg-black"
>
	<!-- Radial gradient for the container to give a faded look -->
	{#if showFade}
		<div
			class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_90%)]"
		></div>
	{/if}
	<slot />
</div>
