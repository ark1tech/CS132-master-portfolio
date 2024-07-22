<script>
	import { cn } from '$lib/utils';
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	import MarqueeItem from '$components/page_home/marquee/MarqueeItem.svelte';
	import PreviewCards from '$components/page_home/PreviewCards.svelte';

	export let className = '';
	export { className as class };

	export let firstHalfProjects = [];
	export let secondHalfProjects = [];

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		const element = document.querySelector('.three-dee2');
		const anchor = document.querySelector('.anchor');

		gsap.to(element, {
			scrollTrigger: {
				trigger: anchor,
				start: 'top top',
				end: 'bottom bottom',
				scrub: true
			},
			rotateX: -15,
			scale: 1,
			ease: 'none',
			onUpdate: (self) => {
				const progress = self.progress;
				console.log(progress);
				const scale =
					progress < 0.5
						? gsap.utils.interpolate(0.6, 1, progress * 2)
						: gsap.utils.interpolate(1, 0.6, (progress - 0.5) * 2);
				self.targets()[0].style.transform = `perspective(35em) rotateX(${gsap.utils.interpolate(15, -15, progress)}deg) scale(${scale}) translateY(-30px)`;
			}
		});
	});
</script>

<div class="anchor h-[140dvh] w-full">
	<div class="sticky top-[24dvh] w-full">
		<div class={cn('three-dee2', className)}>
			<MarqueeItem>
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
			</MarqueeItem>
			<MarqueeItem isReversed={true}>
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
			</MarqueeItem>
			<slot />
		</div>
	</div>
</div>
