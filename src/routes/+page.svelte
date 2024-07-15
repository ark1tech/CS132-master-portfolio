<script lang="ts">
	import PhAscii from '$components/elements/PhAscii.svelte';
	import PilipiNutsLogo from '$assets/logo.svg';
	import HeroCTA from '$components/buttons/HeroCTA.svelte';
	import GridBackground from '$components/_aceternity/components/backgrounds/GridBackground.svelte';

	// export let data;
</script>

<GridBackground>
	<section class="flex min-h-[100dvh] flex-col items-center justify-center md:flex-row">
		<div class="relative z-10 flex flex-col gap-[2rem]">
			<div class="flex w-fit flex-col">
				<span class="flex flex-col items-start">
					<h5 class="font-['JetBrains_Mono'] text-sm">PILIPINUTS 2023:</h5>
					<h1 class="magic-text-static">Pilipinas in a Nutshell</h1>
				</span>
				<p>The state of Philippine data</p>
			</div>
			<HeroCTA />
		</div>
		<PhAscii />
	</section>
</GridBackground>
<section class="f flex h-[100dvh]"></section>
