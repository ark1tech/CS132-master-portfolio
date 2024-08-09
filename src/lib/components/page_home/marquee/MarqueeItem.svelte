<script>
	import { cn } from '$lib/utils';
	export let isReversed = false;
</script>

<div class="marquee three-dee">
	<div
		class={cn({
			marquee__content__reversed: isReversed,
			marquee__content: !isReversed
		})}
	>
		<slot />
	</div>
	<div
		class={cn({
			marquee__content__reversed: isReversed,
			marquee__content: !isReversed
		})}
		aria-hidden="true"
	>
		<slot />
	</div>
</div>

<style>
	.marquee {
		--gap: 0rem;
		position: relative;
		display: flex;
		overflow: hidden;
		user-select: none;
		gap: var(--gap);
	}

	.marquee__content,
	.marquee__content__reversed {
		flex-shrink: 0;
		display: flex;
		justify-content: space-around;
		gap: var(--gap);
		width: min-content;
        will-change: transform;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - var(--gap)));
		}
	}

    @keyframes reverse-scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(100% + var(--gap)));
		}
	}

	/* Pause animation when reduced-motion is set */
	@media (prefers-reduced-motion: reduce) {
		.marquee__content,
		.marquee__content__reversed {
			animation-play-state: paused !important;
		}
	}

	.marquee__content {
		animation: scroll 280s linear infinite;
	}

	.marquee__content__reversed {
		animation: reverse-scroll 280s linear infinite;
	}

    .marquee:hover .marquee__content,
    .marquee:hover .marquee__content__reversed {
        animation-play-state: paused;
    }

</style>
