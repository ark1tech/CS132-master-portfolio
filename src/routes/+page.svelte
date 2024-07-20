<script>
	/*
	 * Components *
	 */
	import PhAscii from '$lib/components/page_home/PhAscii.svelte';
	import GridBackground from '$lib/components/library/aceternity/components/backgrounds/GridBackground.svelte';
	import Marquee from '$components/page_home/Marquee.svelte';
	import PreviewCards from '$components/page_home/PreviewCards.svelte';
	import PrimaryButton from '$components/global/buttons/PrimaryButton.svelte';

	/*
	 * Assets *
	 */
	// import PilipiNutsLogo from '$assets/logo.svg';

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
	}
	const { firstHalf: firstHalfProjects, secondHalf: secondHalfProjects } = splitProjects(data);
</script>

<!-- Hero Section -->
<div
	class="pointer-events-none absolute inset-y-0 left-0 z-0 w-full bg-[radial-gradient(ellipse_at_top_left,#565656_-250%,transparent_60%)] text-[#262626]"
></div>
<GridBackground>
	<section class="flex min-h-[100dvh] w-full flex-col items-center justify-between md:flex-row">
		<div class="relative z-10 flex w-full flex-col gap-[2rem]">
			<div class="flex w-fit flex-col">
				<span class="flex flex-col items-start">
					<p class="text-white">Pilipinas in a Nutshell:</p>
					<h1 class="sans-text font-[600]">PilipiNuts 2023</h1>
				</span>
				<p class="foot-text">The state of Philippine data</p>
				<!-- <PrimaryButton /> -->
			</div>
		</div>
		<div class="justify-begin flex w-full">
			<PhAscii />
		</div>
	</section>
</GridBackground>

<!-- Marquee Section -->
<section class="flex h-[100dvh] w-full flex-col items-center justify-center gap-[2rem]">
	<h2>Here's what we found out</h2>
	<div
		class="relative flex w-full flex-col items-center justify-center gap-[1.5rem] overflow-hidden"
	>
		<Marquee>
			{#each firstHalfProjects as { key, projects }}
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
