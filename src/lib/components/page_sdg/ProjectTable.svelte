<script>
    export let projects = [];
    export let url = '';

    import {
        Dialog,
        DialogContent,
        DialogTrigger
    } from '$components/library/shadcn/ui/dialog';
    import * as Table from '$components/library/shadcn/ui/table';

    import ProjectCard from '$components/page_sdg/ProjectCard.svelte';
</script>

<Table.Root>
    <Table.Caption>*:⊹ Nothing follows ⊹:*</Table.Caption>
    <Table.Header>
        <Table.Row>
            <Table.Head class="w-[45%]">Title</Table.Head>
            <Table.Head class="w-[45%]">Project by</Table.Head>
            <Table.Head class="w-[10%]"></Table.Head>
        </Table.Row>
    </Table.Header>
    <Table.Body>
        {#each projects as project}
            <Table.Row class="group">
                <Table.Cell class="font-medium">
                    <h3 class="small-text sans-text font-[500] text-white">
                        {project.title}
                    </h3>
                </Table.Cell>
                <Table.Cell>
                    <div class="flex flex-col justify-start gap-[0.2rem]">
                        <p
                            class="small-text sans-text font-[600] text-[#ffffff]"
                        >
                            {project.name}
                        </p>
                        <p class="foot-text sans-text text-white">
                            {project.authors}
                        </p>
                    </div>
                </Table.Cell>

                <Table.Cell class="mono-text group text-right">
                    <Dialog>
                        <DialogTrigger
                            ><p
                                class="small-text p-[0.5rem] group-hover:bg-[#2b2b2b] group-hover:text-white duration-150"
                            >
                                View
                            </p></DialogTrigger
                        >
                        <DialogContent
                            class="flex h-[90dvh] w-[90dvw] sm:w-[70dvw]"
                        >
                            <ProjectCard
                                tableMargin={true}
                                {project}
                                {url}
                                class="overflow-y-scroll"
                            />
                        </DialogContent>
                    </Dialog>
                </Table.Cell>
            </Table.Row>
        {/each}
    </Table.Body>
</Table.Root>
