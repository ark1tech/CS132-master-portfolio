<script>
	/*
	 * Components *
	 */
	import PhAscii from '$lib/components/page_home/PhAscii.svelte';
	import GridBackground from '$lib/components/library/aceternity/components/backgrounds/GridBackground.svelte';
</script>

<!-- Hero Section -->
<GridBackground>
	<section class="flex min-h-[100dvh] w-full flex-col items-center justify-between md:flex-row">
		<div class="relative z-10 flex w-full flex-col gap-[2rem]">
			<div class="flex w-fit flex-col">
				<span class="flex flex-col items-start">
					<p class="text-white">Pilipinas in a Nutshell:</p>
					<h1 class="sans-text font-[600]">PilipiNuts 2023</h1>
				</span>
				<p class="foot-text">
					The state of Philippines's sustainable development through big data.
				</p>
			</div>
            <h5>
                Loading...
            </h5>
		</div>
		<div class="justify-begin flex w-full">
			<PhAscii />
		</div>
	</section>
</GridBackground>