<script>
	import { cn } from '$lib/utils';

	import PilipiNutsLogo from '$assets/logo/logo-green.svg';
	import PilipiNutsLogo2 from '$assets/logo/logo-plain.svg';

	export let className = undefined;
	export { className as class };
</script>

<div class={cn('mr-[2rem] flex h-fit flex-row items-center gap-[0.8rem]', className)}>
	<div class="flex h-full items-center">
		<img src={PilipiNutsLogo2} alt="PilipiNuts Logo" class="h-[20px] w-auto sm:h-full" />
	</div>
	<div class="hidden h-full flex-col items-start justify-center sm:flex">
		<p class=" text-[0.6rem] text-white">Pilipinas in a Nutshell:</p>
		<h1 class="mono-text mb-[-2px] text-[1.2rem] font-[800] leading-tight">PilipiNuts 2023</h1>
	</div>
</div>
<div class={cn('flex h-fit flex-row items-center gap-[0.8rem]', className)}>
	<div class="flex h-full items-center">
		<img src={PilipiNutsLogo} alt="PilipiNuts Logo" class="h-[20px] w-auto sm:h-full" />
	</div>
	<div class="hidden h-full flex-col items-start justify-center sm:flex">
		<p class=" text-[0.6rem] text-white">Pilipinas in a Nutshell:</p>
		<h1 class="mono-text mb-[-2px] text-[1.2rem] font-[800] leading-tight">PilipiNuts 2023</h1>
	</div>
</div>

<style>
	/* * {
		border: 0.1px solid red;
	} */
</style>
