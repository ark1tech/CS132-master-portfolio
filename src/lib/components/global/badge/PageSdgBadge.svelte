<script>
	export let imageSource = undefined;
    export let sdgNumber = 1;
</script>

<div
	class="flex w-fit flex-row items-center justify-center gap-2 rounded-full border-[1px] border-style px-[0.7rem] py-[0.15rem]"
>
	{#if imageSource}
		<div class="relative">
			<img
				src={imageSource}
				alt=""
				class="relative bottom-0 left-0 -z-10 m-auto h-[0.7rem] w-auto"
			/>
			<img
				src={imageSource}
				alt=""
				class="absolute bottom-0 left-0 -z-20 m-auto h-[0.7rem] w-auto animate-ping blur-sm"
			/>
		</div>
	{/if}
	<p class="foot-text mono-text font-[300] text-[#aaaaaac8]">
		<span class="mono-text text-inherit sm:inline hidden">Sustainable Development Goal</span>
		<span class="mono-text text-inherit sm:hidden inline">SDG</span> #{sdgNumber}
	</p>
</div>
