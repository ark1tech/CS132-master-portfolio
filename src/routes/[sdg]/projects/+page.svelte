<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { scrollTop } from 'svelte-scrolling';
    /*
     * Components *
     */
    // TODO: Add index.js to components
    import PageSdgBadge from '$components/global/badge/PageSdgBadge.svelte';
    import HeaderBackground from '$components/page_sdg/HeaderBackground.svelte';
    import ProjectList from '$components/page_sdg/ProjectList.svelte';
    import ProjectTable from '$components/page_sdg/ProjectTable.svelte';
    import ArrowUpIcon from '$components/icons/ArrowUpIcon.svelte';

    import * as Tabs from '$components/library/shadcn/ui/tabs';

    // import { Reddit } from 'svelte-share-buttons-component';

    /*
     * Assets *
     */

    /*
     * Data *
     */
    export let data;
    const sdg = data.params.sdg.split('-')[1];
    const projectBySdg = data.projects[sdg] || [];
    const sdgData = data.sdg[sdg];
    const sdgColors = {
        1: '#E5243B',
        2: '#DDA63A',
        3: '#4C9F38',
        4: '#C5192D',
        5: '#FF3A21',
        6: '#26BDE2',
        7: '#FCC30B',
        8: '#A21942',
        9: '#FD6925',
        10: '#DD1367',
        11: '#FD9D24',
        12: '#BF8B2E',
        13: '#3F7E44',
        14: '#0A97D9',
        15: '#56C02B',
        16: '#00689D',
        17: '#19486A'
    };

    let url = ``;
    onMount(() => {
        if (browser) {
            const { hash } = window.location;
            if (!hash) {
                url = window.location.href;
            }
            url = window.location.href.split('#')[0];
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    const yOffset = -70;
                    const y =
                        element.getBoundingClientRect().top +
                        window.scrollY +
                        yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }, 500);
            }
        }
    });
</script>

<svelte:head>
    <title>SDG {sdg} | PilipiNuts 2023</title>
</svelte:head>

<!-- Hero Section -->
<button on:click={() => scrollTop()} class="fixed bottom-[1.5rem] right-[1rem] z-[100] border-style bg-[#00000025] p-[1rem] backdrop-blur-md">
    <ArrowUpIcon/>
</button>
<div class="container relative contain-paint">
    <HeaderBackground sdgColor={sdgColors[sdg]} />
    <main class="relative min-h-[93dvh]">
        <section
            class="relative z-[30] flex min-h-[93dvh] w-full flex-col items-center gap-[3rem] py-[5dvh] md:items-start"
        >
            <div
                class="flex w-full flex-col items-center gap-[3rem] md:items-start"
            >
                <div
                    class="flex flex-col items-center gap-[1rem] md:items-start"
                >
                    <div class="flex flex-row items-center gap-[1rem]">
                        <a
                            class="foot-text mono-text flex flex-row items-center gap-[0.5rem] px-[0.3rem] py-[0.2rem] text-[#989898] hover:bg-[#70707036] hover:text-[#e2e2e2]"
                            href="/"
                            target="_self"
                            data-sveltekit-preload-data="tap"
                        >
                            ✦ Home
                        </a>
                        <p class="foot-text mono-text">/</p>
                        <PageSdgBadge
                            sdgNumber={sdg}
                            imageSource={`/${sdgData.Image}`}
                        />
                    </div>
                    <h1
                        class="text-center font-[600] leading-tight md:text-left"
                    >
                        {sdgData.Title}
                    </h1>
                    <h3
                        class="sans-text text-balance text-center leading-tight text-[#bdbdbd] md:text-left"
                    >
                        {sdgData.Description}
                    </h3>
                </div>
                <Tabs.Root value="list" class="w-full">
                    <div
                        class="inline-flex w-full justify-center md:justify-start"
                    >
                        <Tabs.List>
                            <Tabs.Trigger value="list" class="w-full"
                                >List</Tabs.Trigger
                            >
                            <Tabs.Trigger value="table" class="w-full"
                                >Table</Tabs.Trigger
                            >
                        </Tabs.List>
                    </div>
                    <Tabs.Content value="list">
                        <ProjectList projects={projectBySdg} {url} />
                    </Tabs.Content>
                    <Tabs.Content value="table">
                        <ProjectTable projects={projectBySdg} {url} />
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </section>
    </main>
</div>
