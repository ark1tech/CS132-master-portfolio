<script>
	import { page } from '$app/stores';

	import Spotlight from '$components/library/aceternity/components/Spotlight.svelte';
	import ErrorAscii from '$components/page_home/ErrorAscii.svelte';
</script>

<!-- Hero Section -->
<div class="container relative contain-paint">
	<main class="relative min-h-[93dvh]">
		<div class="absolute h-full w-[calc(100%-3rem)]">
			<Spotlight
				class="absolute top-[1rem] h-[200dvh] max-h-[300%] w-[120dvh] max-w-[300%] translate-x-[-30%] translate-y-[-40%]  animate-spotlight md:h-[100dvh] md:max-h-[100%] md:w-full md:max-w-[100%] md:scale-[1.5]"
			/>
		</div>
		<section
			class="relative z-[30] flex h-[93dvh] w-full flex-col items-center py-[5dvh] sm:py-[10dvh] md:items-start md:py-[20dvh]"
		>
			<div class="flex w-full flex-col items-center gap-[3rem] md:w-[60%] md:items-start">
				<div class="flex flex-col gap-[1rem]">
					<h2 class="text-center font-[500] leading-tight md:text-left">
						{$page.status}
						{$page.error.message}
					</h2>
					<h3 class="sans-text text-center font-[400] leading-tight text-[#bdbdbd] md:text-left">
						{$page.error.description ?? 'Sorry, the page you are looking for is not available.'}
					</h3>
				</div>
				<a href="/" target="_self" class="hover:text-white font-[400] sans-text small-text">
					Go Back
				</a>
			</div>
		</section>
		<div class="absolute bottom-0 right-0 my-auto md:right-[0rem] md:top-0">
			<ErrorAscii class="flex h-full w-full flex-col items-end justify-center" />
		</div>
	</main>
</div>
