<script>
    import { cn } from '$lib/utils';

    import MarqueeItem from '$components/page_home/marquee/MarqueeItem.svelte';
    import PreviewCards from '$components/page_home/PreviewCards.svelte';

    export let className = '';
    export { className as class };

    export let firstHalfProjects = [];
    export let secondHalfProjects = [];
</script>

<div class="anchor w-full">
    <div class="w-full">
        <div class={cn(className)}>
            <MarqueeItem>
                {#each firstHalfProjects as { key, projects }}
                    {#each projects as project, i}
                        <PreviewCards
                            imageSource={project.plot}
                            title={project.title}
                            sdg={project.sdg}
                            groupNumber={project.group}
                            {key}
                            class="mx-4"
                        />
                    {/each}
                {/each}
            </MarqueeItem>
            <MarqueeItem isReversed={true}>
                {#each secondHalfProjects as { key, projects }}
                    {#each projects as project}
                        <PreviewCards
                            imageSource={project.plot}
                            title={project.title}
                            sdg={project.sdg}
                            groupNumber={project.group}
                            {key}
                            class="mx-4"
                        />
                    {/each}
                {/each}
            </MarqueeItem>
            <slot />
        </div>
    </div>
</div>
