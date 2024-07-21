<script>
	// import { cn } from '$lib/utils';
	// export let className = '';
	// export { className as class };
</script>

<aside class="fluid">
	<div class="border">
		<div class="trail"></div>
	</div>
	<div class="content">
		<p><slot /></p>
	</div>
</aside>

<style>
	:root {
		--accent: #a6ffc2;
		--border: #45905d;
		--text: rgb(255, 255, 255);
		--border-radius: 8;
		--border-width: 2;
		--trail-size: 350;
		--trail-speed-per-100px: 1250;
	}

	aside {
		width: fit-content;
		height: fit-content;
		position: relative;
	}

	.border {
		position: absolute;
		inset: 0;
		clip-path: inset(0 0 0 0 round calc(var(--border-radius) * 1px));
		border-radius: calc(var(--border-radius) * 1px);
		background: var(--border);
		z-index: 1;
		border: 0;
		container-type: size;
		overflow: hidden;
	}

	.trail {
		/* get widt and height using cq units */
		--width: 100cqw;
		--height: 100cqh;

		/* use tan atan2 to cast width and height to numbers */
		/* read more: https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j */
		--num-width: tan(atan2(var(--width), 1px));
		--num-height: tan(atan2(var(--height), 1px));

		/* calculate speed based on travel distance and duration per 100px */
		--travel-distance: calc((var(--num-width) + var(--num-height)) * 2);
		--speed: calc(var(--travel-distance) / 100 * var(--trail-speed-per-100px) * 1ms);

		width: calc(var(--trail-size) * 1cqmin);
		aspect-ratio: 2 / 1;
		position: absolute;
		background: radial-gradient(100% 100% at right, var(--accent, red), transparent 50%);
		offset-path: border-box;
		offset-anchor: 100% 50%;
		animation: journey var(--speed) infinite linear;
		z-index: 0;
	}

	@keyframes journey {
		to {
			offset-distance: 100%;
		}
	}

	aside p {
		font-weight: 600;
		margin: 0;
		color: var(--text);
	}

	.content {
		background:
			linear-gradient(#095e3a -10%, #56f5b2 300%) padding-box,
			transparent;
		border: calc(var(--border-width) * 1px) solid transparent;
		border-radius: calc(var(--border-radius) * 1px);
		white-space: nowrap;
		z-index: 3;
		padding: 0.45rem 1.2rem;
		position: relative;
	}
</style>
