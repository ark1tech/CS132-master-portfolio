<script>
	import { cn } from '$lib/utils';
	export let className = '';
	export let href = '';
	export { className as class };
</script>

<a {href} target="_blank" class={cn('flex flex-row justify-center', className)}>
	<p class="m-0 flex flex-row items-center gap-[0.5rem] font-[300] text-white"><slot /></p>
</a>

<style>
	a {
		background: linear-gradient(to bottom, #063f2c -20%, #07815c 300%);
		box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.145);
		border-radius: 2px;
		padding: 0.5rem 1.25rem;
		transition: filter 0.15s ease-in-out;
	}

	a:hover {
		filter: brightness(1.5);
	}
</style>
