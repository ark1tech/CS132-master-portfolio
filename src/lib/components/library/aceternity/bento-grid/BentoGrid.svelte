<script>
	import { cn } from '$lib/utils';

	export let className = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'mx-auto grid max-w-[20rem] grid-cols-1 gap-[1.4rem] md:auto-rows-[18rem] md:grid-cols-3 ',
		className
	)}
>
	<slot />
</div>
