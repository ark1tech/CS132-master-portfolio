<script context="module">
	export const prerender = true;
</script>

<script>
	import { dataStore } from '$lib/stores/dataStore';
	import { onDestroy } from 'svelte';

	import * as Popover from '$components/library/shadcn/ui/popover';

	let sdgData;
	const unsubscribe = dataStore.subscribe(($data) => {
		sdgData = $data.sdg;
	});
	onDestroy(unsubscribe);

	let images = {};
	$: {
		Object.keys(sdgData).forEach((key) => {
			import(`$assets/sdg/${key}.webp`).then((module) => {
				images[key] = module.default;
			});
		});
	}
</script>

<Popover.Root avoidCollisions={true} preventScroll={true}>
	<Popover.Trigger>
		<slot />
	</Popover.Trigger>
	<Popover.Content avoidCollisions={true} sideOffset={0} class="h-fit">
		<Popover.Arrow size={20} class="absolute" />
		<div class="h-[60dvh] divide-[#383838] overflow-y-auto">
			{#each Object.entries(sdgData) as [key, sdg]}
				<Popover.Item disabled={key === '12' || key === '17'}>
					<div class="flex flex-row items-center gap-[1rem]">
						<img
							fetchpriority="high"
							loading="eager"
							src={images[key]}
							alt={sdg.Title}
							class="h-[15px] w-auto"
						/>
						<p class="mono-text text-[#989898]">
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
	.skeleton {
		background-color: #e0e0e0; /* Light grey background */
		width: 10px; /* Same width as the image */
		height: 10px; /* Same height as the image */
		animation: pulse 1.5s infinite ease-in-out;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
</style>
