<script>
	import { cn } from '$lib/utils';
	import SdgBadge from '$components/global/badge/SdgBadge.svelte';

	export let imageSource = '';
	export let title = '';
	export let sdg = '';
	export let key = '';

	let className = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'card relative h-[13rem] w-[calc(100dvw*0.5)] overflow-hidden rounded-[5px] border border-[#35353583] md:w-[23rem]',
		className
	)}
>
	{#if imageSource}
		<img
			src={imageSource}
			alt={title}
			class="image absolute left-0 top-0 m-auto h-full w-full object-cover opacity-65 brightness-[0.5] duration-500"
		/>
		<!-- Added 'image' class for specific targeting -->
	{/if}
	<div
		class="absolute bottom-0 left-0 mt-auto h-fit w-full p-[1.5rem]"
		style="background: linear-gradient(to top, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0) 100%);"
	>
		<h3 class="small-text mb-2 font-semibold text-white">{title}</h3>
		<SdgBadge sdg={sdg} key={key}/>
	</div>
</div>

<style>
	.card:hover .image {
		opacity: 1; /* Set opacity to 100% on hover */
		filter: brightness(1);
	}
</style>
