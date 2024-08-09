<script>
	import { cn } from '$lib/utils';

	let className = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'sticky top-[4rem] z-10 flex w-full items-center justify-center overflow-hidden',
		className
	)}
>
	<div class="w-full">
		<slot />
	</div>
	<div
		class="background-mask three-dee z-[-3] text-[#3e5b4ee1] bg-grid-dash-[#3e5b4ee1]/[0.4]"
	></div>
	<div
		class="pointer-events-none absolute inset-y-0 right-0 w-[20%]  from-black"
	></div>
</div>

<style>
	.background-mask {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 72%);
	}

	/* .background-mask-right {
		mask-image: linear-gradient(to right, rgba(0, 0, 0, 1.0) 70%, transparent 100%);
	} */
</style>
