<script>
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
	export let value;
</script>

<AccordionPrimitive.Item {value} class={cn("border-style-thin-bottom", className)} {...$$restProps}>
	<slot />
</AccordionPrimitive.Item>
