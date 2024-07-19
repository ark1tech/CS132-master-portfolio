<script>
	import { cn } from '$lib/utils';
	export let reverse = false;
	export let pauseOnHover = false;
	export let vertical = false;
	export let repeat = 2;
	let className = undefined;
	export { className as class };

	let isHovering = false; // State to track hover status
</script>

<div
	class={cn(
		'group flex w-full items-center justify-center overflow-hidden [--duration:0s] [--gap:0rem] [gap:var(--gap)]',
		{
			'flex-row': !vertical,
			'flex-col': vertical
		},
		className,
		{ '[animation-play-state:paused]': isHovering && pauseOnHover } // Apply paused state based on isHovering
	)}
>
	{#each Array(repeat).fill(0) as _}
		<div
			class={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
				'animate-marquee flex-row': !vertical && !reverse,
				'animate-marquee-vertical flex-col': vertical && !reverse,
				'animate-marquee-reverse flex-row': !vertical && reverse,
				'animate-marquee-reverse-vertical flex-col': vertical && reverse,
				'group-hover:[animation-play-state:paused]': pauseOnHover
			})}
		>
			<slot></slot>
		</div>
	{/each}
</div>
