<script>
	export const prerender = 'true';
	export let sdgColor = '#000000';
</script>

<div
	class="absolute left-[23dvw] top-[7dvh] h-[50dvh] w-[100dvw] rotate-[0deg] overflow-hidden rounded-full opacity-85 md:h-[40dvh]"
	style={`
	mask-image: 
	linear-gradient(4deg, black -20%, transparent 80%);
	transform: perspective(100px) rotateY(8deg) rotateX(123deg) scale(0.9);
	background: 
		linear-gradient(to right, 
		${sdgColor}00, 
		${sdgColor}3f 20%,
		${sdgColor}22 25%,
		${sdgColor}80 36%, 
		${sdgColor}43 40%, 
		${sdgColor}2f 47%, 
		${sdgColor}4f 52%, 
		${sdgColor}33 55%, 
		${sdgColor}33 72%, 
		${sdgColor}63 86%, 
		${sdgColor}00 100%);
	`}
>
	<div
		class="absolute inset-0"
		style={`
		background-image: url('/noise.png');
		background-size: 20px 20px;
		background-repeat: repeat;
		mix-blend-mode: overlay;
		opacity: 0.1;
		`}
	></div>
</div>
