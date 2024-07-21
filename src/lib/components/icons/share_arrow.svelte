<script>
	export const prerender = true;
	import { cn } from '$lib/utils';
	let className = '';
	export { className as class };
</script>

<div class={cn('h-[1em] w-[1em]', className)}>
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="white"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="3"
			d="M6 19L19 6m0 0v12.48M19 6H6.52"
		/>
	</svg>
</div>

<!-- #3cd37d -->