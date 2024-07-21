<script>
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils';
	export let className = undefined;
	export { className as class };

	const originalAsciiArt = `
                                 O                           
                            O00                               
                           00OOOOOZmZZ                        
                          0OOOZZZZZmm                         
                         ZOOZZZZmmmmm                         
                          ZZZmmmmmwww                         
                          Zmmmmmwwwwwp                        
                         mmmmwwwwwpppp                        
                         mwwwwwwpppdd                         
                      mm wwwwppppddd                          
                      mwwwppppddd                             
                       pppppddddd                             
                       ppdddddbb                              
                        ddddbbbbk k                           
                         db hkkkk                             
                           bkkkhhh    aa                      
                           khhhhhha oaaaoo*    ##             
                        k    hha   oao ooo**** *##            
                         hhhhaa   ao  oo  ***#                
                           aaaaaa        * ###M               
                            aooo#             MM              
                             ooo   *  *   MMW    WWWWWB       
                       ao*                WMWWW  WWBBBBB      
                       o           #         WWB   $BBB$      
                                    MMWMWM       BB $$$$      
                    *o              WWWWWW       $$$$$$$      
                    *              WWWWW WBB$ BB $@$$@        
                   M** M           WWBBB BBBB$$@   @@@        
                 #***                   BB$ @$@    @@@@ @     
                **#                    $$$$@$  @@@@     @     
              ##*                     $$$$$@@ @@@@     @@     
            ####                       $@@@            @@@@   
         W*##                            @@        @  @@@@@@@ 
        ###W                                @      @@@@@@@@@@ 
       *M                                @@@@@   @@@@@@@@@@@@ 
      #                              @@@@@@@@@@@@@@@@@@@@@@@@@
                                    @@@@@@@@@@@@@@@@@@@@@@@@@@
                                    @@  @ @@   @@@@@@@@@@@@@@@
                                   @@          @@@@@@@@@@@@@@@
                                   @          @@@@@@@@@@  @@  
                                  @@@          @@@@@@@@@   @  
                                                @@@@@@@@@     
                             @@@                   @@@@@@     
                                                      @@      
                       @@`;

	let randomString = originalAsciiArt;

	const characters = '1234567890';
	const updateInterval = 40; // Interval in milliseconds for updates
	const resetDelay = 3500; // Delay in milliseconds before resetting

	function startAnimation() {
		let currentLine = randomString.split('\n').length - 1; // Start from the last line
		const interval = setInterval(() => {
			if (currentLine < 0) {
				clearInterval(interval); // Stop the interval
				setTimeout(() => {
					// Start a timeout to delay the reset
					startAnimation(); // Restart the animation after the delay
				}, resetDelay);
			} else {
				randomString = replaceCharactersFromBottom(randomString, currentLine);
				currentLine--;
			}
		}, updateInterval);
	}

	onMount(() => {
		startAnimation();
		document.addEventListener('scroll', function () {
			const scrollPercentage = Math.min((window.scrollY * 4.5) / window.innerHeight, 1);
			const scrollPercentageScale = Math.min((window.scrollY * 10.5) / window.innerHeight, 1);
			const maxRotateX = 15;
			const maxRotateY = -30;
			const maxScale = 1;
			const minScale = 0.9;

			const scaleRange = maxScale - minScale;
			const newScale = Math.max(minScale, minScale + scrollPercentageScale * scaleRange);
			const newRotateX = Math.max(0, (1 - scrollPercentage) * maxRotateX);
			const newRotateY = Math.max(0, (1 - scrollPercentage) * maxRotateY);

			const foreground = document.querySelector('.three-deez');
			if (foreground) {
				foreground.style.transform = `perspective(35em) rotateX(${newRotateX}deg) rotateY(${newRotateY}deg) scale(${newScale}) translateY(-30px)`;
			}
		});
		return () => {
			clearInterval(interval); // Clear interval on component unmount
		};
	});

	function replaceCharactersFromBottom(str, startLine) {
		const lines = str.split('\n');
		for (let i = startLine; i < lines.length; i++) {
			lines[i] = lines[i].replace(/[^\s]/g, () =>
				characters.charAt(Math.floor(Math.random() * characters.length))
			);
		}
		return lines.join('\n');
	}
</script>

<div class={cn('z-[100]', className)} role="button">
	<pre style="font-weight:600;" class="three-deez ascii magic-text-static-2 hack-effect">
		{randomString}
	</pre>
</div>

<style>
	@media (width > 768px) {
		.ascii {
			font-size: 0.52rem;
			opacity: 0.5;
		}
	}
	@media (width <= 768px) {
		.ascii {
			opacity: 0.4;
		}
	}

	@media (640px < width <= 768px) {
		.ascii {
			font-size: 0.36rem;
		}
	}

	@media (475px < width <= 640px) {
		.ascii {
			font-size: 0.34rem;
		}
	}

	@media (width <= 475px) {
		.ascii {
			font-size: 0.29rem;
		}
	}
</style>
