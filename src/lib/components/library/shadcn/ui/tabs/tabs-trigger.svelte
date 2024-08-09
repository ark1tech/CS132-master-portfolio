<script>
    import { Tabs as TabsPrimitive } from 'bits-ui';
    import { cn } from '$lib/utils.js';
    let className = undefined;
    export let value;
    export { className as class };
</script>

<p class="inline-flex w-full">
    <TabsPrimitive.Trigger
        class={cn(
            'items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#101010] data-[state=active]:text-foreground data-[state=active]:shadow',
            className
        )}
        {value}
        {...$$restProps}
        on:click
        on:keydown
        on:focus
    >
        <slot />
    </TabsPrimitive.Trigger>
</p>
