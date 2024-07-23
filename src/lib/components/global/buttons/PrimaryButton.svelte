<script>
	import { cn } from '$lib/utils';
	export let className = '';
	export {className as class};
</script>

<button class={cn("flex flex-row justify-center", className)}>
	<p class="m-0 font-[300] text-white flex flex-row gap-[0.5rem] items-center"><slot /></p>
</button>

<style>
	button {
		background: linear-gradient(to bottom, #063f2c -20%, #07815c 300%);
		box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.145);
		border-radius: 2px;
		padding: 0.5rem 1.25rem; 
		transition: filter 0.15s ease-in-out;
	}

	button:hover {
		filter: brightness(1.5);
	}
</style>
