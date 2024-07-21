<script context="module">
	export const prerender = true;
</script>

<script>
	/*
	 * Components *
	 */
	import PhAscii from '$components/page_home/PhAscii.svelte';
	import GridBackground from '$components/library/aceternity/components/GridBackground.svelte';
	import Spotlight from '$components/library/aceternity/components/Spotlight.svelte';
</script>

<!-- Hero Section -->
<div id="spotlight" class="container relative">
	<main class="relative min-h-[93dvh]">
		<div class="absolute h-full w-[calc(100%-3rem)] animate-fade">
			<Spotlight
				class="absolute top-[1rem] h-[200dvh] max-h-[300%] w-[120dvh] max-w-[300%] translate-x-[-30%] translate-y-[-40%]  animate-spotlight md:h-[100dvh] md:max-h-[100%] md:w-full md:max-w-[100%] md:scale-[1.5]"
			/>
		</div>
		<div class="min-h-[140dvh]">
			<GridBackground>
				<section
					class="relative z-[30] flex h-[93dvh] w-full flex-col items-center py-[5dvh] sm:py-[10dvh] md:items-start md:py-[20dvh]"
				>
					<div class="flex w-full flex-col items-center gap-[3rem] md:w-[60%] md:items-start">
						<div class="flex flex-col gap-[1rem]">
							<h2 class="text-center font-[500] leading-tight md:text-left">
								The state of <span class="hidden text-inherit sm:inline">Philippine</span><span
									class="inline text-inherit sm:hidden">PH</span
								> sustainable development goals
							</h2>
							<h3
								class="sans-text text-center font-[400] leading-tight text-[#bdbdbd] md:text-left"
							>
								Discover data science projects highlighting the progress and challenges of
								sustainable development in the Philippines.
							</h3>
						</div>
						<div class="flex flex-row gap-[1.5rem]">
							<div class="skeleton w-[12rem] h-[2rem]"></div>
						</div>
					</div>
				</section>
				<div class="absolute bottom-0 right-0 my-auto md:right-[4rem] md:top-0">
					<PhAscii class="flex h-full w-full flex-col items-end justify-center" />
				</div>
			</GridBackground>
		</div>
	</main>
</div>

<style>
	.skeleton {
		background: linear-gradient(to right, #9d9d9d98 0%, #5e5e5e79 25%, #83838368 50%, #5e5e5e79 75%, #9d9d9d98 100%);
		background-size: 200% 100%;
		animation: skeleton-loading 3s infinite;
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