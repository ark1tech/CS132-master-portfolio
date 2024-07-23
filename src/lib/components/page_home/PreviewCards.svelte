<script context="module">
	export const prerender = true;
</script>

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
		'card relative h-[10rem] md:h-[13rem] w-[calc(100dvw*0.5)] overflow-clip rounded-[5px] border border-[#35353583] md:w-[23rem]',
		className
	)}
>
	<img
		src={imageSource}
		alt={title}
		fetchpriority="high"
		loading="eager"
		class="image absolute left-0 top-0 m-auto h-full w-full object-cover opacity-65 brightness-[0.5] duration-500"
	/>
	<div
		class="card-bg absolute bottom-0 left-0 z-10 mt-auto flex h-fit w-full flex-col gap-[0rem] p-[1.5rem]"
	>
		<h3 class="small-text up-up-away mb-2 font-semibold text-white">{title}</h3>
		<div class="up-up-away-2">
			<SdgBadge {sdg} {key} />
		</div>
	</div>
</div>

<style>
	.card:hover > .image {
		opacity: 1;
		filter: brightness(1);
		-webkit-filter: brightness(1);
		-moz-filter: brightness(1);
		-o-filter: brightness(1);
		-ms-filter: brightness(1);
	}

	.card:hover .up-up-away,
	.card:hover > div > .up-up-away-2 {
		transform: translateY(-4px);
		text-shadow: 2px 2px 10px rgb(121, 121, 121);
	}

	.up-up-away {
		transition:
			transform 0.25s ease-in-out,
			text-shadow 0.25s ease-in-out;
	}

	.up-up-away-2 {
		transition:
			transform 0.5s ease-in-out,
			text-shadow 0.5s ease-in-out;
	}

	.card-bg {
		background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0) 100%);
	}
</style>
