<script>
	import { onMount, onDestroy } from 'svelte';
	import { dataStore } from '$lib/stores/dataStore.js';
	import { splitProjects } from '$lib/utils.js';

	/*
	 * Components *
	 */
	import PhAscii from '$components/page_home/PhAscii.svelte';
	import GridBackground from '$components/library/aceternity/components/backgrounds/GridBackground.svelte';
	import Marquee from '$components/page_home/Marquee.svelte';
	import PreviewCards from '$components/page_home/PreviewCards.svelte';
	import MainButton from '$components/library/aceternity/components/backgrounds/MainButton.svelte';
	import Spotlight from '$components/library/aceternity/components/backgrounds/Spotlight.svelte';

	/*
	 * Assets *
	 */
	import PilipiNutsLogo from '$assets/logo/logo-plain.svg';

	/*
	 * Data *
	 */
	let firstHalfProjects, secondHalfProjects;
	const unsubscribe = dataStore.subscribe((data) => {
		const { firstHalf: fhp, secondHalf: shp } = splitProjects(data);
		firstHalfProjects = fhp;
		secondHalfProjects = shp;
	});
	onDestroy(unsubscribe);


	
</script>

<!-- Hero Section -->
<div class="animate-fade">
	<Spotlight class="md:left-[5rem] md:top-[5rem] top-[10rem] left-[10rem]" />
</div>
<GridBackground>
	<section
		class="relative z-[30] flex min-h-[93dvh] w-full flex-col items-center py-[10dvh] md:items-start md:py-[20dvh]"
	>
		<div class="flex w-full flex-col items-center gap-[2rem] md:w-[60%] md:items-start">
			<div class="flex flex-col">
				<h2 class="text-center font-[600] leading-tight md:text-left">
					The state of <span class="hidden text-inherit sm:inline">Philippine</span><span
						class="inline text-inherit sm:hidden">PH</span
					> sustainable development goals:
				</h2>
				<h2 class="text-center font-[200] leading-tight md:text-left">
					A closer look through data science
				</h2>
			</div>
			<h3 class="sans-text text-center font-[200] leading-tight text-[#959595] md:text-left">
				Subheading maybe
			</h3>
			<MainButton>Learn More</MainButton>
		</div>
	</section>
	<div class="absolute bottom-0 right-0 my-auto md:right-[4rem] md:top-0">
		<PhAscii class="flex h-full w-full flex-col items-end justify-center" />
	</div>
</GridBackground>

<!-- About section -->
<section class="flex min-h-[93dvh] w-full flex-col items-center justify-start gap-[2rem]">
	<h2 class="">About the project</h2>
	<h3 class="">Meow meow meow</h3>
	<p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
</section>

<!-- Marquee Section -->
<section class="flex min-h-[93dvh] w-full flex-col items-center justify-center gap-[2rem]">
	<h2 class="mx-auto max-w-3xl text-center leading-relaxed">Meow meow. Meow. Meow meow.</h2>
	<div
		class="relative flex w-full flex-col items-center justify-center gap-[1.5rem] overflow-hidden"
	>
		<Marquee>
			{#each firstHalfProjects as { key, projects }}
				{#each projects as project, i}
					<PreviewCards
						imageSource={project.plot}
						title={project.title}
						sdg={project.sdg}
						{key}
						class="mx-4"
					/>
				{/each}
			{/each}
		</Marquee>
		<Marquee isReversed={true}>
			{#each secondHalfProjects as { key, projects }}
				{#each projects as project}
					<PreviewCards
						imageSource={project.plot}
						title={project.title}
						sdg={project.sdg}
						{key}
						class="mx-4"
					/>
				{/each}
			{/each}
		</Marquee>

		<div
			class="pointer-events-none absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-black via-black"
		></div>
		<div
			class="pointer-events-none absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-black via-black"
		></div>
	</div>
</section>
