<script lang="ts">
	/*
	 * Components *
	 */
	import PhAscii from '$components/global/elements/PhAscii.svelte';
	import GridBackground from '$lib/components/library/aceternity/components/backgrounds/GridBackground.svelte';
	import Marquee from '$components/library/magicui/components/Marquee.svelte';
	import PreviewCards from '$components/page_home/PreviewCards.svelte';
	import PrimaryButton from '$components/global/buttons/PrimaryButton.svelte';

	/*
	 * Assets *
	 */
	// import PilipiNutsLogo from '$assets/logo.svg';

	/*
	 * Data *
	 */
	// export let data;
</script>

<!-- Hero Section -->
<div
	class="pointer-events-none z-0 absolute inset-y-0 left-0 w-full bg-[radial-gradient(ellipse_at_top_left,#01130c_-50%,transparent_60%)] text-[#01130c]"
></div>
<GridBackground>
	<section class="flex min-h-[100dvh] flex-col items-center justify-center md:flex-row">
		<div class="relative z-10 flex flex-col gap-[2rem]">
			<div class="flex w-fit flex-col">
				<span class="flex flex-col items-start">
					<p class="text-white">Pilipinas in a Nutshell:</p>
					<h1 class="sans-text font-[600]">PilipiNuts 2023</h1>
				</span>
				<p class="foot-text">The state of Philippine data</p>
				<!-- <PrimaryButton /> -->
			</div>
		</div>
		<PhAscii />
	</section>
</GridBackground>

<!-- Hero Section -->
<section class="f flex h-[100dvh] w-full flex-col items-center justify-center gap-[2rem]">
	<h2>Here's what we found out</h2>
	<div
		class="relative flex w-full flex-col items-center justify-center overflow-hidden md:shadow-xl"
	>
		<Marquee pauseOnHover class="[--duration:5s]">
			<PreviewCards />
		</Marquee>
		<Marquee reverse pauseOnHover class="[--duration:5s]">
			<PreviewCards />
		</Marquee>
		<div
			class="pointer-events-none absolute inset-y-0 left-0 w-1/3 border bg-gradient-to-r from-black via-black"
		></div>
		<div
			class="pointer-events-none absolute inset-y-0 right-0 w-1/3 border bg-gradient-to-l from-black via-black"
		></div>
	</div>
</section>
