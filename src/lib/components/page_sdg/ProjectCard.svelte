<script>
    export let project = {};
    export let url = '';
    export let className = '';
    export let tableMargin = false;
    export { className as class };

    import { cn } from '$lib/utils';
    import {
        Dialog,
        DialogContent,
        DialogTrigger
    } from '$components/library/shadcn/ui/dialog';
    import * as Popover from '$components/library/shadcn/ui/popover';

    import PrimaryButton from '$components/global/buttons/PrimaryButton.svelte';
    import ShareButton from '$components/global/buttons/ShareButton.svelte';
    import WebsiteIcon from '$components/icons/WebsiteIcon.svelte';
</script>

<div
    id={project.group}
    class={cn('border-style relative min-h-full w-full', className)}
>
    <div
        class={cn(
            'relative flex min-h-full flex-col items-start',
            tableMargin
                ? 'xl:flex-row xl:items-stretch xl:justify-start'
                : 'lg:flex-row lg:items-stretch lg:justify-start'
        )}
    >
        <div
            class={cn(
                'z-[12] flex h-full w-full flex-col gap-[2rem] p-[2rem] ',
                tableMargin ? 'xl:w-[75%]' : 'lg:w-[75%]'
            )}
        >
            <h4 class="text-left font-[600] leading-tight">
                {project.title}
            </h4>

            <Dialog>
                <DialogTrigger
                    ><img
                        class={cn(
                            'border-style transition-all duration-200 hover:scale-[1.01] hover:brightness-125',
                            tableMargin ? 'mb-[-2rem]' : ''
                        )}
                        fetchpriority="high"
                        loading="eager"
                        src={project.plot}
                        alt={project.title}
                    /></DialogTrigger
                >
                <DialogContent
                    class="border-style flex h-auto w-[95dvw] flex-col justify-center sm:w-[75dvw]"
                    imageHref={project.plot}
                >
                    <img
                        class="h-auto w-full"
                        fetchpriority="high"
                        loading="eager"
                        src={project.plot}
                        alt={project.title}
                    />
                </DialogContent>
            </Dialog>

            <p
                class={cn(
                    'sans-text w-full text-wrap text-left font-[350] leading-[1.4em] text-[#bdbdbd]',
                    // tableMargin ? '' : ''
                )}
            >
                {@html project.desc}
            </p>
        </div>
        <div
            class={cn(
                'z-10 flex w-full flex-col gap-[1rem] bg-[#00000051] p-[2rem]',
                tableMargin ? 'xl:w-[25%]' : 'lg:w-[25%]'
            )}
        >
            <div class="flex h-full flex-col gap-[1.5rem]">
                <div class="flex flex-col gap-[0.6rem]">
                    <p class="sans-text font-[300]">Project by</p>
                    <div class="flex flex-col gap-[0.2rem]">
                        <p class="sans-text font-[600] text-[#ffffff]">
                            {project.name}
                        </p>
                        {#each project.authors.split(', ') as author}
                            <p
                                class="small-text sans-text w-full text-left font-[320] leading-tight text-white"
                            >
                                {author}
                            </p>
                        {/each}
                    </div>
                </div>
                <div class="flex flex-col gap-[0.6rem]">
                    <p class="sans-text font-[300]">Class</p>
                    <div class="flex flex-col gap-[0.2rem]">
                        <p
                            class="small-text sans-text w-full text-left font-[320] leading-tight text-white"
                        >
                            {project.class}
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-[0.4rem]">
                    <PrimaryButton href={project.website}
                        ><WebsiteIcon />View Website</PrimaryButton
                    >
                    <Popover.Root>
                        <Popover.Trigger>
                            <ShareButton link={`${url}#${project.group}`}
                                >Share</ShareButton
                            >
                        </Popover.Trigger>
                        <Popover.Content width="fit">
                            <Popover.Arrow size={10} class="absolute" />
                            <p class="foot-text">Copied!</p>
                        </Popover.Content>
                    </Popover.Root>
                </div>
            </div>
        </div>
        <div
            class={cn(
                'absolute inset-0 z-0 h-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#202020] from-[-50%] to-[#090909] to-100%',
                tableMargin
                    ? 'xl:bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))]'
                    : 'lg:bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))]'
            )}
        >
            <div
                class="absolute inset-0"
                style={`
                    background-image: url('/noise.png');
                    background-size: 160px 160px;
                    background-repeat: repeat;
                    mix-blend-mode: overlay;
                    opacity: 1;
                `}
            ></div>
        </div>
    </div>
</div>
