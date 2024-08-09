<script>
    import { onMount, onDestroy } from 'svelte';
    import { writable } from 'svelte/store';
    import { cn } from '$lib/utils';

    export let className = '';
    export { className as class };
    export let quantity = 100;
    export let staticity = 50;
    export let ease = 50;
    export let size = 0.4;
    export let refresh = false;
    export let color = '#88B68F';
    export let vx = 0;
    export let vy = 0;

    let canvasRef;
    let canvasContainerRef;
    let context;
    let circles = [];
    let mouse = { x: 0, y: 0 };
    let canvasSize = { w: 0, h: 0 };
    let dpr = 1;

    const mousePosition = writable({ x: 0, y: 0 });

    function hexToRgb(hex) {
        hex = hex.replace('#', '');
        if (hex.length === 3) {
            hex = hex
                .split('')
                .map((char) => char + char)
                .join('');
        }
        const hexInt = parseInt(hex, 16);
        const red = (hexInt >> 16) & 255;
        const green = (hexInt >> 8) & 255;
        const blue = hexInt & 255;
        return [red, green, blue];
    }

    function onMouseMove(event) {
        mousePosition.set({ x: event.clientX, y: event.clientY });
    }

    function initCanvas() {
        resizeCanvas();
        drawParticles();
    }

    function resizeCanvas() {
        if (canvasContainerRef && canvasRef && context) {
            circles.length = 0;
            canvasSize.w = canvasContainerRef.offsetWidth;
            canvasSize.h = canvasContainerRef.offsetHeight;
            canvasRef.width = canvasSize.w * dpr;
            canvasRef.height = canvasSize.h * dpr;
            canvasRef.style.width = `${canvasSize.w}px`;
            canvasRef.style.height = `${canvasSize.h}px`;
            context.scale(dpr, dpr);
        }
    }

    function circleParams() {
        const x = Math.floor(Math.random() * canvasSize.w);
        const y = Math.floor(Math.random() * canvasSize.h);
        const translateX = 0;
        const translateY = 0;
        const pSize = Math.floor(Math.random() * 2) + size;
        const alpha = 0;
        const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
        const dx = (Math.random() - 0.5) * 0.1;
        const dy = (Math.random() - 0.5) * 0.1;
        const magnetism = 0.1 + Math.random() * 4;
        return {
            x,
            y,
            translateX,
            translateY,
            size: pSize,
            alpha,
            targetAlpha,
            dx,
            dy,
            magnetism
        };
    }

    const rgb = hexToRgb(color);

    function drawCircle(circle, update = false) {
        if (context) {
            const { x, y, translateX, translateY, size, alpha } = circle;
            context.translate(translateX, translateY);
            context.beginPath();
            context.arc(x, y, size, 0, 2 * Math.PI);
            context.fillStyle = `rgba(${rgb.join(', ')}, ${alpha})`;
            context.fill();
            context.setTransform(dpr, 0, 0, dpr, 0, 0);

            if (!update) {
                circles.push(circle);
            }
        }
    }

    function clearContext() {
        if (context) {
            context.clearRect(0, 0, canvasSize.w, canvasSize.h);
        }
    }

    function drawParticles() {
        clearContext();
        const particleCount = quantity;
        for (let i = 0; i < particleCount; i++) {
            const circle = circleParams();
            drawCircle(circle);
        }
    }

    function remapValue(value, start1, end1, start2, end2) {
        const remapped =
            ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
        return remapped > 0 ? remapped : 0;
    }

    function animate() {
        clearContext();
        circles.forEach((circle, i) => {
            // Handle the alpha value
            const edge = [
                circle.x + circle.translateX - circle.size, // distance from left edge
                canvasSize.w - circle.x - circle.translateX - circle.size, // distance from right edge
                circle.y + circle.translateY - circle.size, // distance from top edge
                canvasSize.h - circle.y - circle.translateY - circle.size // distance from bottom edge
            ];
            const closestEdge = edge.reduce((a, b) => Math.min(a, b));
            const remapClosestEdge = parseFloat(
                remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
            );
            if (remapClosestEdge > 1) {
                circle.alpha += 0.02;
                if (circle.alpha > circle.targetAlpha) {
                    circle.alpha = circle.targetAlpha;
                }
            } else {
                circle.alpha = circle.targetAlpha * remapClosestEdge;
            }
            circle.x += circle.dx + vx;
            circle.y += circle.dy + vy;
            circle.translateX +=
                (mouse.x / (staticity / circle.magnetism) - circle.translateX) /
                ease;
            circle.translateY +=
                (mouse.y / (staticity / circle.magnetism) - circle.translateY) /
                ease;

            drawCircle(circle, true);

            // circle gets out of the canvas
            if (
                circle.x < -circle.size ||
                circle.x > canvasSize.w + circle.size ||
                circle.y < -circle.size ||
                circle.y > canvasSize.h + circle.size
            ) {
                // remove the circle from the array
                circles.splice(i, 1);
                // create a new circle
                const newCircle = circleParams();
                drawCircle(newCircle);
            }
        });
        window.requestAnimationFrame(animate);
    }

    onMount(() => {
        context = canvasRef.getContext('2d');
        initCanvas();
        animate();
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', initCanvas);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', initCanvas);
        };
    });

    $: {
        if (refresh) {
            initCanvas();
        }
    }

    $: {
        const { x, y } = $mousePosition;
        if (canvasRef) {
            const rect = canvasRef.getBoundingClientRect();
            const { w, h } = canvasSize;
            mouse.x = x - rect.left - w / 2;
            mouse.y = y - rect.top - h / 2;
        }
    }
</script>

<div bind:this={canvasContainerRef} class={cn(className)} aria-hidden="true">
    <canvas bind:this={canvasRef} class="size-full" />
</div>
