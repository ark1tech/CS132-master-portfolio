<div class="relative z-10 flex items-center justify-center bg-transparent gradient-mask-r-60">
	<div class="full-width full-height background-mask bg-grid-dash-[#232323]/[0.8]"></div>
	<slot />
</div>

<style>
	.background-mask {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		mask-image: radial-gradient(ellipse at right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 72%);
		z-index: -1; /* Ensure it stays behind the slot content */
	}
</style>
