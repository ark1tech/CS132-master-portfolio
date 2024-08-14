<script>
    import { cn } from '$lib/utils';
    export let className = '';
    export let href = '';
    export let ref = undefined;
    export let target = '_blank';
    export { className as class };

    import { scrollTo } from 'svelte-scrolling';
</script>

<!-- svelte-ignore a11y-missing-attribute -->
{#if ref}
    <a
        {target}
        use:scrollTo={{ ref: ref, duration: 1000, offset: -100 }}
        class={cn(
            'flex flex-row justify-center',
            'foot-text m-0 flex flex-row items-center gap-[0.5rem] font-[300] text-white',
            className
        )}
    >
        <slot />
    </a>
{:else}
    <a
        {href}
        {target}
        class={cn(
            'flex flex-row justify-center',
            'foot-text m-0 flex flex-row items-center gap-[0.5rem] font-[300] text-white',
            className
        )}
    >
        <slot />
    </a>
{/if}

<style>
    a {
        background: linear-gradient(to bottom, #00482d -50%, #0ecf95 250%);
        box-shadow: inset 0px -1px 15px -2px #02c980;
        border: 1px solid #005d39;
        border-radius: 2px;
        padding: 0.5rem 1.25rem;
        transition: filter 0.15s ease-in-out;
    }

    a:hover {
        filter: brightness(1.5);
    }
</style>
