<script>
	import { cn } from '$lib/utils';
	export let className = undefined;
	export { className as class };
</script>

<svg
	class={cn(
		'translate-x-[-55%] translate-y-[-47%] scale-100 pointer-events-none absolute z-[1] h-[170%] w-[150%] animate-spotlight md:h-[100%] md:w-[100%]',
		className
	)}
	width="454"
	height="408"
	viewBox="0 0 454 408"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g filter="url(#filter0_f_192_16)">
		<path
			d="M45 45.2329L182.807 284.794C228.947 365.003 334.755 386.96 409 331.733V331.733L45 45.2329Z"
			fill="url(#paint0_linear_192_16)"
			fill-opacity="0.21"
		/>
	</g>
	<defs>
		<filter
			id="filter0_f_192_16"
			x="0"
			y="0.23291"
			width="454"
			height="407.067"
			filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="22.5" result="effect1_foregroundBlur_192_16" />
		</filter>
		<linearGradient
			id="paint0_linear_192_16"
			x1="372.5"
			y1="344.5"
			x2="84.5"
			y2="68.5"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#D9D9D9" stop-opacity="0" />
			<stop offset="0.805" stop-color="white" />
		</linearGradient>
	</defs>
</svg>
