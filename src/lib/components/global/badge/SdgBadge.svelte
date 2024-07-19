<script>
	export let sdg; // Accept sdg as a prop
	export let key;
</script>

{#if sdg}
	<div class="flex items-center gap-2">
		<div class="relative">
			<img src={sdg.Image} alt={`SDG ${key} icon`} class="z-30 w-[12px]" />
			<img
				src={sdg.Image}
				alt={`SDG ${key} icon`}
				class="absolute bottom-0 left-0 z-20 m-auto w-[12px] animate-ping-custom blur-[2px]"
			/>
		</div>
		<p class="foot-text">{sdg.Title}</p>
	</div>
{/if}

<style>
	@keyframes ping {
		75%,
		100% {
			transform: scale(2);
			opacity: 0;
		}
	}
	.animate-ping-custom {
		animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
	}
</style>
