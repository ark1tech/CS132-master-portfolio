<script>
	import { cn } from '$lib/utils';

	import PilipiNutsLogo from '$assets/logo/logo-plain-green.svg';

	export let className = undefined;
	export { className as class };

	let spinning = false;
	function startSpin() {
		spinning = true;
		setTimeout(() => {
			spinning = false;
		}, 1000); // Continue for the duration of one full spin
	}
</script>

<div
	on:mouseenter={startSpin}
	role="button"
	tabindex="0"
	class={cn('logo-container flex h-fit flex-row items-center gap-[0.5rem]', className)}
>
	<div class:logo-spin={spinning} class="flex h-full items-center">
		<img src={PilipiNutsLogo} alt="PilipiNuts Logo" class="h-[20px] w-auto sm:h-full" />
	</div>
	<div class=" flex h-full flex-row items-center justify-start gap-[0.5rem]">
		<h1
			class="mono-text mb-[-2px] hidden text-[1.2rem] font-[800] leading-tight tracking-tight sm:flex"
		>
			PilipiNuts
		</h1>
		<div class="relative border-[0.5px] border-[#7c7c7c52] bg-[#1b1b1b]">
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
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.logo-spin {
		animation: spin 1s cubic-bezier(0,.64,.54,.81) infinite;
	}
</style>
