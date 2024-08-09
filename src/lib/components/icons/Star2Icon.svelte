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
    stroke="rgb(156, 156, 156)"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
        d="M3 12h18"
    /><path d="M12 21v-18" /><path d="M7.5 7.5l9 9" /><path
        d="M7.5 16.5l9 -9"
    /></svg
>
