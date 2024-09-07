<script>
	import PilipiNutsLogo from '$assets/logo/logo-plain-green.svg';
    const arrow = `<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="#cccccc"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>`;
</script>

<div class="container relative !min-h-[10dvh] bg-black z-40">
	<div class="relative h-[1px] overflow-hidden">
		<div class="h-[1px] border-t-[1px] border-t-[#7f7f7f60]"></div>
		<div
			class="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-black via-black sm:w-[5%]"
		></div>
		<div
			class="pointer-events-none absolute inset-y-0 right-0 w-0 bg-gradient-to-l from-black via-black sm:w-[5%]"
		></div>
	</div>
	<nav class="relative flex min-h-[10dvh] flex-col justify-between py-[3rem]">
		<div
			class="relative z-50 flex h-full flex-col items-center justify-between gap-[1rem] bg-black px-[1rem] sm:px-[4rem] md:flex-row"
		>
			<div class="flex w-fit flex-row items-center gap-[0.5rem]">
				<img src={PilipiNutsLogo} alt="PilipiNuts Logo" class="md:h-[20px] h-[17px] w-auto" />
				<p class="mono-text text-[#9b9b9b] medium-text">PilipiNuts</p>
				<p class="sans-text text-[#9b9b9b]">©</p>
				<p class="mono-text text-[#9b9b9b]">
					{new Date().getFullYear()}
				</p>    
			</div>
			<div class="flex flex-col items-end gap-[0.5rem]">
				<a
					data-sveltekit-reload
					class="flex flex-row items-center gap-[0.2rem] mono-text p-[0.5rem] text-[#cccccc] hover:bg-[#70707036] hover:text-white"
					href="/bts">Meet the Devs</a
				>
			</div>
		</div>
	</nav>
</div>
