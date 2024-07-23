<script>
	import { onMount, onDestroy } from 'svelte';
	import { cn } from '$lib/utils';
	import { goto } from '$app/navigation';

	/*
	 * Components *
	 */
	// TODO: Add index.js to components
	import PageSdgBadge from '$components/global/badge/PageSdgBadge.svelte';

	/*
	 * Assets *
	 */

	/*
	 * Data *
	 */
	export let data;
	const sdg = data.params.sdg.split('-')[1];
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
	<div
		class="absolute left-[20dvw] top-[7dvh] h-[30dvh] w-[100dvw] rotate-[0deg] rounded-full opacity-85 blur-[95px]"
		style={`
		transform: perspective(90px) rotateY(8deg) rotateX(0123deg) scale(0.9);
		background: 
			linear-gradient(to right, 
			${sdgColors[sdg]}, 
			${sdgColors[sdg]}22 10%, 
			${sdgColors[sdg]}22 30%, 
			${sdgColors[sdg]}a2,
			${sdgColors[sdg]}33 40%, 
			${sdgColors[sdg]}33 40%, 
			${sdgColors[sdg]}93, 
			${sdgColors[sdg]}43, 
			${sdgColors[sdg]}13 80%, 
			${sdgColors[sdg]}10 90%, 
			${sdgColors[sdg]});
		`}
	></div>
	<main class="relative min-h-[93dvh]">
		<section
			class="relative z-[30] flex h-[93dvh] w-full flex-col items-center py-[5dvh] md:items-start"
		>
			<div class="flex w-full flex-col items-center gap-[3rem] pb-[dvh] md:items-start">
				<div class="flex flex-col items-center gap-[1rem] md:items-start">
					<PageSdgBadge sdgNumber={sdg} imageSource={`/${sdgData.Image}`} />
					<h1 class="text-center font-[600] leading-tight md:text-left">
						{sdgData.Title}
					</h1>
					<h3 class="sans-text text-center font-[400] leading-tight text-[#bdbdbd] md:text-left">
						{sdgData.Description}
					</h3>
				</div>
			</div>
			<div class="flex w-full flex-col items-center gap-[3rem] md:items-start"></div>
		</section>
	</main>
</div>
