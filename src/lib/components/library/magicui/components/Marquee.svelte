<script>
	import { cn } from '../utils';
	export let reverse = false;
	export let pauseOnHover = false;
	export let vertical = false;
	export let repeat = 10;
	let className = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'group flex justify-center items-center w-full overflow-hidden p-2 [--duration:10s] [--gap:1rem] [gap:var(--gap)]',
		{
			'flex-row': !vertical,
			'flex-col': vertical
		},
		className
	)}
>
	{#each Array(repeat).fill(0) as _, i}
		<div
			class={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
				'animate-marquee flex-row': !vertical,
				'animate-marquee-vertical flex-col': vertical,
				'group-hover:[animation-play-state:paused]': pauseOnHover,
				'[animation-direction:reverse]': reverse
			})}
		>
			<slot></slot>
		</div>
	{/each}
</div>
