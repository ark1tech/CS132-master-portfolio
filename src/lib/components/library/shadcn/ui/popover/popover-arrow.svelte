<script>
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';
	let className = undefined;
	export let size = 4;
	export { className as class };
</script>

<PopoverPrimitive.Arrow {size} {...$$restProps} class={cn('border-t-[1px] border-l-[1px] border-[#7f7f7f60]', className)} />
