<script>
	import { onMount, onDestroy } from 'svelte';
	import { cn } from '$lib/utils';
	import { dataStore } from '$lib/stores/dataStore.js';
	import { splitProjects } from '$lib/utils.js';
	/*
	 * Components *
	 */
	// TODO: Add index.js to components
	import PhAscii from '$components/page_home/PhAscii.svelte';
	import GridBackground from '$components/library/aceternity/components/GridBackground.svelte';
	import Marquee from '$components/page_home/Marquee.svelte';
	import PreviewCards from '$components/page_home/PreviewCards.svelte';
	import PrimaryButton from '$components/global/buttons/PrimaryButton.svelte';
	import SecondaryButton from '$components/global/buttons/SecondaryButton.svelte';
	import Spotlight from '$components/library/aceternity/components/Spotlight.svelte';
	import ProjectsIcon from '$lib/components/icons/projects.svelte';
	import { BentoGrid, BentoGridItem } from '$components/library/aceternity/bento-grid';

	/*
	 * Assets *
	 */
	import PilipiNutsLogo from '$assets/logo/logo-plain.svg';

	/*
	 * Data *
	 */
	let firstHalfProjects, secondHalfProjects, sdgData;
	const unsubscribe = dataStore.subscribe(($data) => {
		sdgData = $data.sdg;
		const { firstHalf: fhp, secondHalf: shp } = splitProjects($data);
		firstHalfProjects = fhp;
		secondHalfProjects = shp;
	});
	onDestroy(unsubscribe);

	let images = {};
	$: {
		Object.keys(sdgData).forEach((key) => {
			import(`$assets/sdg/${key}.webp`).then((module) => {
				images[key] = module.default;
			});
		});
	}

	const sdgColors = {
		1: '#E5243B',
		2: '#DDA63A',
		3: '#4C9F38',
		4: '#C5192D',
		5: '#FF3A21',
		6: '#26BDE2',
		7: '#FCC30B',
		8: '#A21942',
		9: '#FD6925',
		10: '#DD1367',
		11: '#FD9D24',
		12: '#BF8B2E',
		13: '#3F7E44',
		14: '#0A97D9',
		15: '#56C02B',
		16: '#00689D',
		17: '#19486A'
	};
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
							<PrimaryButton>
								<ProjectsIcon class="h-[1em] w-[1em]" />
								View Projects
							</PrimaryButton>
							<SecondaryButton class="">
								<!-- <Icon icon="bxs:down-arrow"  style="color: white" /> -->
								Learn More
							</SecondaryButton>
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

<!-- About section -->
<div class="container relative">
	<main class="relative min-h-[93dvh]">
		<section class="flex h-full w-full flex-col items-center justify-start gap-[2rem]">
			<h2 class="">About the project</h2>
			<h3 class="">Meow meow meow</h3>
			<p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
		</section>
	</main>
</div>

<!-- Marquee Section -->
<div id="gradient-marquee" class="container relative">
	<main class="relative min-h-[93dvh]">
		<section class="flex min-h-[93dvh] w-full flex-col items-center justify-center gap-[2rem]">
			<h2 class="mx-auto max-w-3xl text-center leading-relaxed">Meow meow. Meow. Meow meow.</h2>
			<div
				class="three-dee relative flex w-full flex-col items-center justify-center gap-[1.5rem] overflow-hidden"
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
					class="pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-black via-black sm:w-[10%]"
				></div>
				<div
					class="pointer-events-none absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-black via-black sm:w-[10%]"
				></div>
			</div>
		</section>
	</main>
</div>

<!-- SDG section -->
<div class="container relative mb-[8rem] mt-[4rem]">
	<main class="relative min-h-[93dvh]">
		<section class="flex h-full w-full flex-col items-center justify-center gap-[2rem]">
			<h2 class="">View projects by SDG</h2>
			<BentoGrid class="mx-auto max-w-full md:auto-rows-[8.5rem]">
				{#each Object.entries(sdgData) as [key, sdg]}
					<BentoGridItem title={sdg.Title} description={sdg.Description} class={sdg.class}>
						<div
							slot="icon"
							style="background:radial-gradient(ellipse at top left,{sdgColors[
								key
							]} -200%, #2c2c2caa 85%, #2c2c2caa 100%);"
							class={cn('h-full w-full text-[#2c2c2c]')}
						></div>
					</BentoGridItem>
				{/each}
			</BentoGrid>
		</section>
	</main>
</div>

<!-- About Us section -->
<div class="container relative">
	<main class="relative min-h-[38dvh] py-[4rem]">
		<h2>Got Questions?</h2>
	</main>
	<div class="relative h-[1px] overflow-hidden">
		<div class="h-[1px] border-t-[1px] border-t-[#7f7f7f60]"></div>
		<div
			class="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-black via-black sm:w-[5%]"
		></div>
		<div
			class="pointer-events-none absolute inset-y-0 right-0 w-0 bg-gradient-to-l from-black via-black sm:w-[5%]"
		></div>
	</div>
	<nav class="relative min-h-[55dvh] py-[4rem]">
		<div class="relative z-50 flex h-full flex-row items-center bg-black px-[1rem] sm:px-[4rem]">
			<div class="flex flex-row items-center gap-[0.5rem]">
				<img src={PilipiNutsLogo} alt="PilipiNuts Logo" class="h-[15px] w-auto" />
				<p class="mono-text text-[#989898]">PilipiNuts</p>
				<p class="sans-text text-[#989898]">©</p>
				<p class="mono-text text-[#989898]">{new Date().getFullYear()}</p>
			</div>
			<div class="flex flex-grow flex-row justify-end gap-[2rem]">
				<p
					class="mono-text hidden p-[0.5rem] text-[#989898] transition-['background-color'] hover:bg-[#70707036] hover:text-[#e2e2e2] sm:inline"
				>
					About
				</p>
			</div>
		</div>
	</nav>
</div>

<style>
	@media (width < 768px) {
		#spotlight {
			contain: paint;
		}
	}

	/* #gradient-marquee::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%);
		width: 100%;
		height: 100%;
		background: radial-gradient(circle at bottom, rgba(45, 45, 45, 0.179), transparent 40%);
		pointer-events: none;
	} */
</style>
