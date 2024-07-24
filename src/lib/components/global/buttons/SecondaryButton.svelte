<script>
	import { cn } from '$lib/utils';
	export let className = '';
	export let href = '';
	export { className as class };
</script>

<a {href} class={cn('flex flex-row justify-center', className)}>
	<p class="m-0 flex flex-row items-center gap-[0.5rem] font-[300] text-white"><slot /></p>
</a>

<style>
	a {
		background: linear-gradient(
			to bottom,
			rgba(30, 116, 94, 0.208) -20%,
			rgba(39, 114, 79, 0.237) 250%
		);
		box-shadow: inset 0px 0px 0px 1px #0f9d7243;
		border-radius: 2px;
		padding: 0.5rem 1.25rem;
		transition: filter 0.15s ease-in-out;
		filter: brightness(0.8);
	}

	a:hover {
		filter: brightness(1.5);
	}
</style>
