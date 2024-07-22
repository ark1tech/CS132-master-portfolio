<script context="module">
	export const prerender = true;
</script>

<script>
</script>

<!-- Hero Section -->
<div class="item-start container relative">
	<main class="relative flex min-h-[93dvh] flex-col justify-center gap-[1.25rem]">
		<div class="skeleton h-[10dvh] w-full opacity-20 rounded-lg"></div>
		<div class="skeleton h-[8dvh] w-full opacity-20 rounded-lg"></div>
		<div class="skeleton h-[5dvh] w-full opacity-20 rounded-lg"></div>
		<div class="skeleton h-[8dvh] w-full opacity-20 rounded-lg"></div>
		<div class="skeleton h-[4dvh] w-full opacity-20 rounded-lg"></div>
		<div class="skeleton h-[10dvh] w-full opacity-20 rounded-lg"></div>
	</main>
</div>

<style>
	.skeleton {
		background: linear-gradient(
			to right,
			#9d9d9d98 0%,
			#5e5e5e79 25%,
			#83838368 50%,
			#5e5e5e79 75%,
			#9d9d9d98 100%
		);
		background-size: 200% 100%;
		animation: skeleton-loading 1.25s infinite;
		border-radius: 2px;
	}

	@keyframes skeleton-loading {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}
</style>
