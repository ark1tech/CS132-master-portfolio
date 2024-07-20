<script>
	import { onMount } from 'svelte';

	/*
	 * Components *
	 */
	import PhAscii from '$components/page_home/PhAscii.svelte';
	import GridBackground from '$components/library/aceternity/components/backgrounds/GridBackground.svelte';
	import Marquee from '$components/page_home/Marquee.svelte';
	import PreviewCards from '$components/page_home/PreviewCards.svelte';
	import BorderBeam from '$components/library/aceternity/components/backgrounds/BorderBeam.svelte';
	import Spotlight from '$components/library/aceternity/components/backgrounds/Spotlight.svelte';

	/*
	 * Assets *
	 */
	import PilipiNutsLogo from '$assets/logo/logo-plain.svg';
	// import Rive from '@rive-app/canvas';

	/*
	 * Data *
	 */
	export let data;
	const splitProjects = (data) => {
		return Object.entries(data.projects).reduce(
			(acc, [key, projects]) => {
				const midpoint = Math.ceil(projects.length / 2);
				acc.firstHalf.push({
					key,
					projects: projects.slice(0, midpoint).map((project) => ({
						...project,
						sdg: data.sdg[key]
					}))
				});
				acc.secondHalf.push({
					key,
					projects: projects.slice(midpoint).map((project) => ({
						...project,
						sdg: data.sdg[key]
					}))
				});
				return acc;
			},
			{ firstHalf: [], secondHalf: [] }
		);
	};
	const { firstHalf: firstHalfProjects, secondHalf: secondHalfProjects } = splitProjects(data);

	// Animations
	// let canvasElement;
	// onMount(() => {
	// 	if (canvasElement) {
	// 		const r = new Rive({
	// 			src: '/logo.riv',
	// 			canvas: canvasElement,
	// 			autoplay: true,
	// 			stateMachines: 'State Machine 1',
	// 			artboard: 'Logo',
	// 			onLoad: () => {
	// 				r.resizeDrawingSurfaceToCanvas();
	// 			}
	// 		});
	// 	}
	// });
</script>

<!-- Hero Section -->
<GridBackground>
	<Spotlight class="md:left-[5rem] md:top-[10rem] left-[10rem] top-0" />
	<section
		class="relative z-[30] flex min-h-[94dvh] w-full flex-col items-center py-[10dvh] md:items-start md:py-[20dvh] lg:py-[30dvh]"
	>
		<div class="flex w-full flex-col items-center gap-[2rem] md:w-[60%] md:items-start">
			<div class="flex flex-col">
				<h2 class="text-center font-[600] leading-tight md:text-left">
					The state of <span class="text-inherit sm:inline hidden">Philippine</span><span class="text-inherit sm:hidden inline">PH</span> sustainable development goals:
				</h2>
				<h2 class="text-center font-[200] leading-tight md:text-left">A closer look through data science</h2>
			</div>
			<BorderBeam>Learn More</BorderBeam>
		</div>
	</section>
	<div class="absolute bottom-0 right-0 my-auto md:right-[4rem] md:top-0">
		<PhAscii class="flex h-full w-full items-center justify-center" />
	</div>
</GridBackground>

<!-- Marquee Section -->
<section class="flex h-[100dvh] w-full flex-col items-center justify-center gap-[2rem]">
	<h2 class="mx-auto max-w-3xl text-center leading-relaxed">
		Meow meow. Meow. Meow meow.
	</h2>
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
