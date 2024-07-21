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
			// const scrollPercentage = Math.min((window.scrollY + window.innerHeight) / (window.innerHeight * 2), 1);
			const scrollPercentage = Math.min((window.scrollY * 3.5) / window.innerHeight, 1);
			const maxRotateX = 20;
			const maxRotateY = -30;
			const newRotateX = Math.max(0, (1 - scrollPercentage) * maxRotateX);
			const newRotateY = Math.max(0, (1 - scrollPercentage) * maxRotateY);

			const element = document.querySelector('.three-dee');
			if (element) {
				element.style.transform = `perspective(35em) rotateX(${newRotateX}deg) rotateY(${newRotateY}deg) scale(0.9) translateY(-30px)`;
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

<div class={cn('select-none', className)} role="presentation">
	<pre style="font-weight:600;" class="ascii magic-text-static-2 three-dee">
		{randomString}
	</pre>
</div>

<style>
	@media (width > 768px) {
		.ascii {
			opacity: 0.8;
		}
	}

	@media (640px < width <= 768px) {
		.ascii {
			font-size: 0.45rem;
			opacity: 0.6;
		}
	}

	@media (475px < width <= 640px) {
		.ascii {
			font-size: 0.37rem;
			opacity: 0.6;
		}
	}

	@media (width <= 475px) {
		.ascii {
			font-size: 0.32rem;
			opacity: 0.6;
		}
	}
</style>
