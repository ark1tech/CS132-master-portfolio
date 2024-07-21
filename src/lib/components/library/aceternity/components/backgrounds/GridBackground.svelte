<script>
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	let className = undefined;
	export { className as class };

	onMount(() => {
		document.addEventListener('scroll', function () {
			const scrollPercentageScale = Math.min((window.scrollY * 10.5) / window.innerHeight, 1);
			const maxRotateX = 15;
			const maxRotateY = -30;
			const maxScale = 1;
			const minScale = 0.9;
			const scaleRange = maxScale - minScale;

			const scrollPercentageBg = Math.min(window.scrollY / window.innerHeight, 1);
			const newScaleBg = Math.max(minScale, minScale + scrollPercentageScale * scaleRange);
			const newRotateXBg = Math.max(0, (1 - scrollPercentageBg) * maxRotateX);
			const newRotateYBg = Math.max(0, (1 - scrollPercentageBg) * maxRotateY);

			const background = document.querySelector('.three-dee');
			if (background) {
				background.style.transform = `perspective(35em) rotateX(${newRotateXBg}deg) rotateY(${newRotateYBg}deg) scale(${newScaleBg}) translateY(-30px)`;
			}
		});
	});
</script>

<div
	class={cn(
		'sticky top-[4rem] z-10 flex w-full items-center justify-center overflow-hidden gradient-mask-r-90',
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
		class="pointer-events-none absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-black"
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
