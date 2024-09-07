<script>
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
</script>

<caption class={cn("mono-text mt-4 foot-text text-[#414141]", className)} {...$$restProps}>
	<slot />
</caption>
