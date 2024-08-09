<script>
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import { cn, flyAndScale } from '$lib/utils.js';
	let className = undefined;
	export let transition = flyAndScale;
	export let transitionConfig = undefined;
	export let align = 'center';
	export let sideOffset = 4;
	export let width = '18rem';
	export { className as class };
</script>

<PopoverPrimitive.Content
	{transition}
	{transitionConfig}
	{align}
	{sideOffset}
	{...$$restProps}
	class={cn(
		'border-style z-50 rounded-md bg-popover p-4 text-popover-foreground shadow-md outline-none',
		className
	)}
	style={`width: ${width};`}
>
	<slot />
</PopoverPrimitive.Content>
