<script>
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import * as Dialog from './index.js';
	import { cn, flyAndScale } from '$lib/utils.js';
	let className = undefined;
	export let transition = flyAndScale;
	export let transitionConfig = {
		duration: 200
	};
	export { className as class };
	export let imageHref = undefined;
</script>

<Dialog.Portal>
	<Dialog.Overlay />
	<DialogPrimitive.Content
		{transition}
		{transitionConfig}
		class={cn(
			'fixed left-[50%] top-[50%] z-[100] translate-x-[-50%] translate-y-[-50%] bg-background',
			className
		)}
		{...$$restProps}
	>
		<slot />
		<DialogPrimitive.Close
			class="absolute z-20 right-4 top-3 whitespace-nowrap rounded-sm text-[#989898] ring-offset-background transition-colors hover:text-[#e2e2e2]  focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
		>
			<div class="text-inherit">╳</div>
			<span class="sr-only">Close</span>
		</DialogPrimitive.Close>
		{#if imageHref}
			<a
				target="_blank"
				href={imageHref}
				class="foot-text font-[500] absolute bottom-[-1.45rem] text-[#989898] hover:text-[#e2e2e2]"
			>
				Open in browser
			</a>
		{/if}
	</DialogPrimitive.Content>
</Dialog.Portal>
