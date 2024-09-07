<script>
	import Spotlight from '$components/library/aceternity/components/Spotlight.svelte';
	import Arki from '$assets/rkbm.svg';
</script>

<svelte:head>
	<title>Meet the Devs | PilipiNuts 2023</title>
</svelte:head>

<div class="container relative contain-paint">
	<main class="relative min-h-[93dvh]">
		<div class="absolute h-full w-[calc(100%-3rem)]">
			<Spotlight
				class="absolute top-[1rem] h-[200dvh] max-h-[300%] w-[120dvh] max-w-[300%] translate-x-[-30%] translate-y-[-40%]  animate-spotlight md:h-[100dvh] md:max-h-[100%] md:w-full md:max-w-[100%] md:scale-[1.5]"
			/>
		</div>
		<section
			class="relative z-[30] flex min-h-[93dvh] w-full flex-col items-center py-[5dvh] sm:py-[10dvh] md:items-start md:py-[10dvh]"
		>
			<div class="flex flex-row items-center gap-[1rem]">
				<a
					class="foot-text mono-text flex flex-row items-center gap-[0.5rem] px-[0.3rem] py-[0.2rem] text-[#989898] hover:bg-[#70707036] hover:text-[#e2e2e2]"
					href="/"
					target="_self"
					data-sveltekit-preload-data="tap"
				>
					✦ Home
				</a>
				<p class="foot-text mono-text">/</p>
				<p class="foot-text mono-text">Meet the Devs</p>
			</div>
			<h2 class="mb-[2rem] w-full md:text-left text-center">This website was made possible by</h2>
			<div class="flex md:w-[80%] w-full flex-col items-start gap-[2rem]">
				<div class="flex h-fit flex-row items-start gap-[1rem]">
					<img
						src={Arki}
						class="border-style-thin inset-0 md:h-[50px] h-[45px] w-auto rounded-[10px] p-[0.7rem]"
						alt="arki"
					/>
					<div class="flex h-fit flex-col items-start gap-[0.5rem]">
						<div class="flex flex-col md:h-[50px] h-[45px] justify-center gap-[0.2rem]">
							<p class="font-[500] text-[#cccccc]">Paul Regonia</p>
							<p class="font-[200] sans-text small-text">Adviser</p>
						</div>
						<p class="small-text sans-text text-pretty">
							Lorem ipsum.
						</p>
					</div>
				</div>
				<div class="flex h-fit flex-row items-start gap-[1rem]">
					<img
						src={Arki}
						class="border-style-thin inset-0 md:h-[50px] h-[45px] w-auto rounded-[10px] p-[0.7rem]"
						alt="arki"
					/>
					<div class="flex h-fit flex-col items-start gap-[0.5rem]">
						<div class="flex flex-col md:h-[50px] h-[45px] justify-center gap-[0.2rem]">
							<p class="font-[500] text-[#cccccc]">Arki Mañago</p>
							<p class="font-[200] sans-text small-text">Developer, Designer</p>
						</div>
						<p class="small-text sans-text text-pretty">
							I love making web apps that solve problems in the most enjoyable experience.
							Interested in startups and community building!
							<a
								class="small-text sans-text text-[#cccccc] hover:text-white"
								href="https://arkimanago.com"
								target="_blank"
							>
								More about me.</a
							>
						</p>
					</div>
				</div>
				<div class="flex h-fit flex-row items-start gap-[1rem]">
					<img
						src={Arki}
						class="border-style-thin inset-0 md:h-[50px] h-[45px] w-auto rounded-[10px] p-[0.7rem]"
						alt="arki"
					/>
					<div class="flex h-fit flex-col items-start gap-[0.5rem]">
						<div class="flex flex-col md:h-[50px] h-[45px] justify-center gap-[0.2rem]">
							<p class="font-[500] text-[#cccccc]">Denzell Dy</p>
							<p class="font-[200] sans-text small-text">Developer, Designer</p>
						</div>
						<p class="small-text sans-text text-pretty">
							Lorem ipsum.
						</p>
					</div>
				</div>
				<div class="flex h-fit flex-row items-start gap-[1rem]">
					<img
						src={Arki}
						class="border-style-thin inset-0 md:h-[50px] h-[45px] w-auto rounded-[10px] p-[0.7rem]"
						alt="arki"
					/>
					<div class="flex h-fit flex-col items-start gap-[0.5rem]">
						<div class="flex flex-col md:h-[50px] h-[45px] justify-center gap-[0.2rem]">
							<p class="font-[500] text-[#cccccc]">Elijah Mejilla</p>
							<p class="font-[200] sans-text small-text">Copywriter</p>
						</div>
						<p class="small-text sans-text text-pretty">
							Lorem ipsum.
						</p>
					</div>
				</div>
				<div class="flex h-fit flex-row items-start gap-[1rem]">
					<img
						src={Arki}
						class="border-style-thin inset-0 md:h-[50px] h-[45px] w-auto rounded-[10px] p-[0.7rem]"
						alt="arki"
					/>
					<div class="flex h-fit flex-col items-start gap-[0.5rem]">
						<div class="flex flex-col md:h-[50px] h-[45px] justify-center gap-[0.2rem]">
							<p class="font-[500] text-[#cccccc]">Brill Riña</p>
							<p class="font-[200] sans-text small-text">Contributor</p>
						</div>
						<p class="small-text sans-text text-pretty">
							Lorem ipsum.
						</p>
					</div>
				</div>
				<!-- <p class="mt-[1rem] foot-text text-[#282828] w-full flex flex-col md:text-left text-center">Of course, it's made with Svelte.</p> -->
			</div>
		</section>
	</main>
	<div
		class="absolute inset-0 z-0 brightness-150" 
		style="background-image: url('./bg.svg');
                background-repeat: no-repeat;
                background-blend-mode: normal;
                opacity: 1;
                background-size: cover"
	></div>
	<div
		class="z-1 absolute inset-0"
		style="background-image: radial-gradient(circle, black 50%, transparent 200%);
                background-repeat: no-repeat;
                background-blend-mode: normal;
                opacity: 1;
                background-size: cover"
	></div>
</div>
