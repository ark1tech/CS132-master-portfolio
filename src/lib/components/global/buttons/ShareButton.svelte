<script>
    import { cn } from '$lib/utils';
    export let className = '';
    export let link = '';
    export let target = '_self';
    export { className as class };

    import LinkIcon from '$components/icons/LinkIcon.svelte';

    // Function to copy link to clipboard
    async function copyLink() {
        await navigator.clipboard.writeText(link);
    }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
    {target}
    class={cn(
        'flex flex-row justify-center',
        'foot-text m-0 flex flex-row items-center gap-[0.5rem] font-[300] text-white',
        className
    )}
    on:click={copyLink}
    on:keydown={(e) => e.key === 'Enter' && copyLink()}
    role="button"
    tabindex="0"
>
    <LinkIcon />
    <slot />
</a>

<style>
    a {
        background: linear-gradient(
            to bottom,
            rgba(8, 31, 12, 0.208) -20%,
            rgba(39, 114, 79, 0.237) 250%
        );
        box-shadow: inset 0px 0px 0px 1px #0f9d7243;
        border-radius: 2px;
        padding: 0.5rem 1.25rem;
        transition: filter 0.15s ease-in-out;
        filter: brightness(0.8);
    }

    a:hover {
        filter: brightness(1.5);
    }
</style>
