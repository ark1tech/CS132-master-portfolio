<script>
	import { cn } from '$lib/utils';
	export let className = '';
	export { className as class };
	export let sdg; // Accept sdg as a prop
	export let key;
</script>

{#if sdg}
	<div class={cn('flex flex-row items-center gap-2', className)}>
		<div class="relative">
			<img src={sdg.Image} alt={`SDG ${key} icon`} class="z-30 w-[10px]" />
			<img
				src={sdg.Image}
				alt={`SDG ${key} icon`}
				class="animate-ping-custom absolute bottom-0 left-0 z-20 m-auto w-[10px] blur-[2px]"
			/>
		</div>
		<p class="foot-text mono-text font-[300] text-[#aaaaaac8]">
			<span class="mono-text hidden text-inherit sm:inline">{sdg.Title}</span>
			<span class="mono-text inline text-inherit sm:hidden">SDG #{key}</span>
		</p>
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
