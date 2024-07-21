<script>
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	let className = undefined;
	export { className as class };

	onMount(() => {
		document.addEventListener('scroll', function () {
			const scrollPercentage = Math.min((window.scrollY * 3.5) / window.innerHeight, 1);
			const maxRotateX = 20;
			const maxRotateY = -30;
			const newRotateX = Math.max(0, (1 - scrollPercentage) * maxRotateX);
			const newRotateY = Math.max(0, (1 - scrollPercentage) * maxRotateY);
			console.log(newRotateX);

			const element = document.querySelector('.three-deez');
			if (element) {
				element.style.transform = `perspective(35em) rotateX(${newRotateX}deg) rotateY(${newRotateY}deg) scale(0.9) translateY(-30px)`;
			}
		});
	});
</script>

<div
	class={cn(
		'relative z-10 flex items-center justify-center overflow-hidden gradient-mask-r-90',
		className
	)}
>
	<slot />
	<div class="background-mask three-deez z-[-3] bg-grid-dash-[#29322ee1]/[0.6]"></div>
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
