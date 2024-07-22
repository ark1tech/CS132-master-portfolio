<script>
	import * as HoverCard from '$components/library/shadcn/ui/hover-card';
	import { cn } from '$lib/utils.js';
	let className = undefined;
	export let inset = undefined;
	export let disabled = false;
	export let href = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'relative flex cursor-default select-none items-center rounded-sm text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
		inset && 'pl-8',
		disabled ? '' : 'group/div hover:bg-[#70707036]',
		className
	)}
	on:click
	on:keydown
	on:focusin
	on:focusout
	on:pointerdown
	on:pointerleave
	on:pointermove
	tabindex="0"
	role="button"
>
	{#if disabled}
		<HoverCard.Root openDelay={150}>
			<HoverCard.Trigger class="cursor-not-allowed"
				><div class="px-2 py-2 opacity-20">
					<slot />
				</div></HoverCard.Trigger
			>
			<HoverCard.Content><p>No Projects :(</p></HoverCard.Content>
		</HoverCard.Root>
	{:else}
		<a {href} target="_self" data-sveltekit-replacestate data-sveltekit-preload-data="tap" class="h-full w-full px-2 py-2">
			<slot />
		</a>
	{/if}
</div>

<style>
	.disabled-overlay::before {
		content: '';
		position: absolute;
		mix-blend-mode: darken;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.5);
		pointer-events: none;
		z-index: 1;
	}
</style>
