<script context="module">
	export const prerender = true;
</script>

<script>
	import * as Popover from '$components/library/shadcn/ui/popover';

	export let sdgData = {};
	let images = {};
    $: {
    	Object.keys(sdgData).forEach((key) => {
    		import(`$assets/sdg/${key}.png`).then((module) => {
    			images[key] = module.default;
    		});
    	});
    }
</script>

<Popover.Root preventScroll={true}>
	<Popover.Trigger>
		<slot />
	</Popover.Trigger>
	<Popover.Content sideOffset={0} class="h-fit">
		<Popover.Arrow size={20} class="absolute" />
		<div class="h-[60dvh] divide-[#383838] overflow-y-auto">
			{#each Object.entries(sdgData) as [key, sdg]}
				<Popover.Item href={`/sdg-${key}/projects/`} disabled={key === '12' || key === '17'}>
					<div class="flex flex-row items-center gap-[1rem]">
						<img
							fetchpriority="high"
							loading="eager"
							src={images[key]}
							alt={sdg.Title}
							class="h-[15px] w-auto"
						/>
						<p class="mono-text text-[#989898] group-hover/div:text-[#ffffff]">
							{sdg.Title}
						</p>
					</div>
				</Popover.Item>
			{/each}
		</div>
	</Popover.Content>
</Popover.Root>

<!-- <DropdownMenu.Root>
	<DropdownMenu.Trigger><slot /></DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			{#each Object.entries(sdgData) as [key, sdg]}
				<DropdownMenu.Item><p class="mono-text text-[#989898]">{sdg.Title}</p></DropdownMenu.Item>
			{/each}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root> -->

<style>
</style>
