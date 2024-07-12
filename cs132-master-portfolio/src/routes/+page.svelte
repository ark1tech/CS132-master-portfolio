<script lang="ts">
	import PhAscii from '$components/PhAscii.svelte';
	import PilipiNutsLogo from '$assets/logo.svg';	
	import HeroCTA from '$lib/aceternity/components/buttons/HeroCTA.svelte';
	// export let data;
</script>

<section class="flex h-[100dvh] flex-col items-center justify-center md:flex-row">
	<div class="relative z-10 flex flex-col gap-[2rem]">
		<div class="flex w-fit flex-col">
			<span class="flex flex-col items-start">
				<h5 class="font-['JetBrains_Mono'] text-sm">PILIPINUTS 2023:</h5>
				<h1 class="magic-text-static">Pilipinas in a Nutshell</h1>
			</span>
			<p>The state of Philippine data</p>
		</div>
		<HeroCTA/>
	</div>
	<PhAscii />
</section>
