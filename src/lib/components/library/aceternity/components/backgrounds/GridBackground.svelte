<script>
	import { cn } from '$lib/utils';

	let className = undefined;
	export { className as class };
</script>

<div class={cn('relative z-10 flex items-center justify-center gradient-mask-r-90', className)}>
	<slot />
	<div class="z-[-3] background-mask bg-grid-dash-[#29322ee1]/[0.6] three-dee"></div>
	<div
		class="pointer-events-none absolute inset-y-0 right-0 w-[20%]  bg-gradient-to-l from-black  "
	></div>
</div>

<style>
	.background-mask {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		mask-image: radial-gradient(ellipse at right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 72%);
	}

</style>
