<script>
	import { Tabs as TabsPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
</script>

<TabsPrimitive.List
	class={cn(
		"bg-[#00000000] border-style w-full text-muted-foreground inline-flex h-9 items-center rounded-lg mb-[1rem] p-1 w",
		className
	)}
	{...$$restProps}
>
	<slot />
</TabsPrimitive.List>
