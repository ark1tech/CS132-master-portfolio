<script>
	import { cn } from '$lib/utils';
	let className = undefined;
	export { className as class };

	export let showFade = true;
</script>

<div
	class={cn('relative flex items-center justify-center bg-black bg-dot-[#494949]/[0.5]', className)}
>
	<!-- Ra}dial gradient for the container to give a faded look -->
	{#if showFade}
		<div
			class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_90%)]"
		></div>
	{/if}
	<slot />
</div>
