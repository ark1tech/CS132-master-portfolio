<script>
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
</script>

<tbody class={cn("[&_tr:first-child]:border-t-[2px] [&_tr:last-child]:border-0", className)} {...$$restProps}>
	<slot />
</tbody>
