<script>
	export const prerender = true;
	import { cn } from '$lib/utils';
	let className = '';
	export let h = '1em';
	export let w = '1em';
	export { className as class };
</script>

<div class={cn(className)} style={`height: ${h}; width: ${w};`}>
	<svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="white"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2.2"
			d="M6 19L19 6m0 0v12.48M19 6H6.52"
		/>
	</svg>
</div>

<!-- #3cd37d -->