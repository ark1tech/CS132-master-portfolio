<script>
    export let projects = [];
    export let url = '';

    import ProjectCard from '$components/page_sdg/ProjectCard.svelte';
</script>

<div class="flex w-full flex-col items-start gap-[2rem]">
    {#each projects as project}
        <ProjectCard {project} {url} />
    {/each}
    <p class="foot-text text-[#414141] w-full flex flex-col items-center">*:⊹ Nothing follows ⊹:*</p>
</div>
