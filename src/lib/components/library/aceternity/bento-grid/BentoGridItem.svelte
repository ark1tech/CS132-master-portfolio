<script>
	import { cn } from '$lib/utils';
	import ShareArrow from '$components/icons/share_arrow.svelte';

	export let className = undefined;
	export { className as class };
	export let title = undefined;
	export let description = undefined;
	// export let icon = undefined;
</script>

<div
	class={cn(
		'group/bento  relative row-span-1 flex flex-col overflow-hidden   bg-black shadow-none shadow-input grayscale transition duration-200 hover:shadow-xl hover:grayscale-0',
		className
	)}
>
	<div
		class="absolute -z-0 h-full w-full brightness-50 transition duration-200 group-hover/bento:brightness-100 group-hover/bento:saturate-150"
	>
		<slot name="icon" />
	</div>
	<ShareArrow
		class="absolute right-[1rem] top-[1rem] opacity-0 transition duration-200 group-hover/bento:translate-x-[2px] group-hover/bento:translate-y-[-2px] group-hover/bento:opacity-100"
	/>
	<div
		class=" relative z-10 flex-grow p-[1.5rem] transition duration-200 group-hover/bento:translate-x-[2px] group-hover/bento:translate-y-[-2px]"
	>
		<div class="flex h-full flex-col">
			<p class="sans-text small-text font-[600] text-neutral-200">
				{title}
			</p>
			<div class="flex flex-grow flex-col justify-end">
				<p class="sans-text line-clamp-2 text-xs font-normal text-neutral-300">
					{description}
				</p>
			</div>
		</div>
	</div>
</div>
