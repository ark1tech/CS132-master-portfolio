<script>
	import { cn } from '$lib/utils';

	import PilipiNutsLogo from '$assets/logo/logo-plain-green.svg';

	export let className = undefined;
	export { className as class };
</script>

<div class={cn('flex h-fit flex-row items-center gap-[0.5rem]', className)}>
	<div class="flex h-full items-center">
		<img src={PilipiNutsLogo} alt="PilipiNuts Logo" class="h-[20px] w-auto sm:h-full" />
	</div>
	<div class=" flex h-full flex-row items-center justify-start gap-[0.5rem]">
		<h1 class="sm:flex hidden mono-text mb-[-2px] text-[1.2rem] font-[800] leading-tight tracking-tight">
			PilipiNuts
		</h1>
		<div class="relative border-[0.5px] border-[#7c7c7c52]">
			<svg class="absolute -left-1 -top-1 h-2 w-2 text-[#838383]" viewBox="0 0 24 24">
				<path d="M12 5v14m-7-7h14" stroke="currentColor" stroke-width="1" />
			</svg>
			<svg class="absolute -bottom-1 -left-1 h-2 w-2 text-[#838383]" viewBox="0 0 24 24">
				<path d="M12 5v14m-7-7h14" stroke="currentColor" stroke-width="1" />
			</svg>
			<svg class="absolute -right-1 -top-1 h-2 w-2 text-[#838383]" viewBox="0 0 24 24">
				<path d="M12 5v14m-7-7h14" stroke="currentColor" stroke-width="1" />
			</svg>
			<svg class="absolute -bottom-1 -right-1 h-2 w-2 text-[#838383]" viewBox="0 0 24 24">
				<path d="M12 5v14m-7-7h14" stroke="currentColor" stroke-width="1" />
			</svg>
			<h1
				class="mono-text-2 relative px-[0.5rem] py-[0.2rem] text-[0.8rem] font-[200] leading-tight tracking-tight"
			>
				2023
			</h1>
		</div>
	</div>
</div>

<style>
</style>
