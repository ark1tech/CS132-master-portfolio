<script lang="ts">
	import PhAscii from '$components/PhAscii.svelte';
	import PilipiNutsLogo from '$assets/logo.svg';
	// export let data;
</script>

<section class="flex h-[100dvh] flex-row items-center justify-center">
	<div class="h-[50dvh]">
		<div
			class="flex w-fit flex-col border-[0px] border-double border-[#393939] px-[2rem] pb-[1rem] pt-[0.7rem]"
		>
			<span class="flex flex-row items-center gap-[0.7rem]">
				<h1>Pilipinas in a Nutshell</h1>
			</span>
			<p>The state of 2023 Philippine data</p>
		</div>
	</div>

	<PhAscii />
</section>
