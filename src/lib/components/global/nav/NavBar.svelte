<script>
    export let className = undefined;
    export { className as class };

    import { cn } from '$lib/utils';
    import { dataStore } from '$lib/stores/dataStore';
    import { onDestroy } from 'svelte';

    import LogoMark from '$components/global/LogoMark.svelte';
    import ProjectMenu from '$components/global/nav/ProjectMenu.svelte';

    import { scrollTo } from 'svelte-scrolling';

    let sdgData;
    const unsubscribe = dataStore.subscribe(($data) => {
        sdgData = $data.sdg;
    });
    onDestroy(unsubscribe);
</script>

<nav class={cn('top-0 z-50 flex flex-col', className)}>
    <div
        class="relative z-50 flex h-full flex-row items-center bg-black px-[1rem] sm:px-[4rem]"
    >
        <LogoMark />
        <div class="flex flex-grow flex-row justify-end gap-[2rem]">
            <!-- <p
                use:scrollTo={{ ref: 'about', duration: 1000, offset: -100 }}
                class="small-text mono-text hidden p-[0.5rem] text-[#989898] hover:bg-[#70707036] hover:text-[#e2e2e2] md:inline"
            >
                About
            </p> -->

            <ProjectMenu {sdgData}>
                <p
                    class="small-text mono-text p-[0.5rem] text-[#cccccc] hover:bg-[#70707036] hover:text-[#ffffff]"
                >
                    Projects by SDG
                </p>
            </ProjectMenu>
            <!-- <p
                use:scrollTo={{ ref: 'contacts', duration: 1000, offset: -130 }}
                class="small-text mono-text hidden p-[0.5rem] text-[#989898] hover:bg-[#70707036] hover:text-[#e2e2e2] md:inline"
            >
                Contact
            </p> -->
        </div>
    </div>
    <div class="h-[1px] border-b-[1px] border-b-[#7f7f7f60]"></div>
    <div
        class="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-black via-black sm:w-[5%]"
    ></div>
    <div
        class="pointer-events-none absolute inset-y-0 right-0 w-0 bg-gradient-to-l from-black via-black sm:w-[5%]"
    ></div>
</nav>

<style>
    /* * {
		border: 0.1px solid red;
	} */
</style>
