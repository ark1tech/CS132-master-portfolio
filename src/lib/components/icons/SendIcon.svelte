<script>
    export const prerender = true;
    import { cn } from '$lib/utils';
    let className = '';
    export { className as class };
</script>

<svg
    class={cn('h-[1em] w-[1em] text-inherit', className)}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
        d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"
    /></svg
>
