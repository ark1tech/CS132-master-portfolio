<script>
	import { LinkPreview as HoverCardPrimitive } from "bits-ui";
	import { cn, flyAndScale } from "$lib/utils.js";
	let className = undefined;
	export let align = "center";
	export let sideOffset = 2;
	export let transition = flyAndScale;
	export let transitionConfig = undefined;
	export { className as class };
</script>

<HoverCardPrimitive.Content
	{transition}
	{transitionConfig}
	delayDuration={0}
	{sideOffset}
	{align}
	class={cn(
		"z-50 w-fit rounded-md  bg-[#272727] py-2 px-3 text-sm text-white shadow-sm outline-none",
		className
	)}
	{...$$restProps}
>
	<slot />
</HoverCardPrimitive.Content>