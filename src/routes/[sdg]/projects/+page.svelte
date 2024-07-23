<script>
	import { onMount, onDestroy } from 'svelte';
	import { cn } from '$lib/utils';
	import { goto } from '$app/navigation';

	/*
	 * Components *
	 */
	// TODO: Add index.js to components
	import PageSdgBadge from '$components/global/badge/PageSdgBadge.svelte';
	import HeaderBackground from '$components/page_sdg/HeaderBackground.svelte';
	import Home from '$components/icons/home.svelte';

	/*
	 * Assets *
	 */

	/*
	 * Data *
	 */
	export let data;
	const sdg = data.params.sdg.split('-')[1];
	const projectBySdg = data.projects[sdg] || [];
	console.log(projectBySdg);
	const sdgData = data.sdg[sdg];
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

<svelte:head>
	<title>SDG {sdg} | PilipiNuts 2023</title>
</svelte:head>

<!-- Hero Section -->
<div class="container relative contain-paint">
	<HeaderBackground sdgColor={sdgColors[sdg]} />
	<main class="relative min-h-[93dvh]">
		<section
			class="relative z-[30] flex min-h-[93dvh] w-full flex-col items-center gap-[5rem] py-[5dvh] md:items-start"
		>
			<div class="flex w-full flex-col items-center gap-[3rem] md:items-start">
				<div class="flex flex-col items-center gap-[1rem] md:items-start">
					<div class="flex flex-row items-center gap-[1rem]">
						<a
							class="foot-text mono-text flex flex-row items-center gap-[0.5rem] px-[0.3rem] py-[0.2rem] text-[#989898] hover:bg-[#70707036] hover:text-[#e2e2e2]"
							href="/"
							target="_self"
							data-sveltekit-preload-data="tap"
						>
							✦ Home
						</a>
						<p class="foot-text mono-text">/</p>
						<PageSdgBadge sdgNumber={sdg} imageSource={`/${sdgData.Image}`} />
					</div>
					<h1 class="text-center font-[600] leading-tight md:text-left">
						{sdgData.Title}
					</h1>
					<h3
						class="sans-text text-balance text-center font-[400] leading-tight text-[#bdbdbd] md:text-left"
					>
						{sdgData.Description}
					</h3>
				</div>
			</div>
			<div class="flex w-full flex-col items-start gap-[3rem]">
				{#each projectBySdg as project}
					<div class="border-style relative flex flex-col items-start gap-[1rem] md:flex-row">
						<div class="relative z-10 flex w-full flex-col gap-[2rem] p-[2rem] md:w-[75%]">
							<h4 class="text-left font-[600] leading-tight">{project.title}</h4>
							<img src={project.plot} alt={project.title} />
							<p
								class="sans-text w-full text-wrap text-left font-[350] leading-[1.4em] text-[#bdbdbd]"
							>
								{@html project.desc}
							</p>
						</div>
						<div
							class="relative z-10 flex h-full w-full flex-col gap-[1rem] border-l p-[2rem] md:w-[25%]"
						>
							<p>Project by:</p>
							{#each project.authors.split(', ') as author}
								<p class="w-full text-left leading-tight">{author}</p>
							{/each}
						</div>
						<div class="absolute z-0 h-full w-full bg-gradient-to-bl from-[#000000] to-[#151515]">
							<div
								class="absolute inset-0"
								style={`
									background-image: url('/noise.png');
									background-size: 160px 160px;
									background-repeat: repeat;
									mix-blend-mode: overlay;
									opacity: 1;
								`}
							></div>
						</div>
					</div>
				{/each}
			</div>
		</section>
	</main>
</div>
