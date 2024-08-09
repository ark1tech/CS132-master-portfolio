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
	const updateInterval = 30; // Interval in milliseconds for updates
	const resetDelay = 3000; // Delay in milliseconds before resetting

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
	<pre class="font-[600] three-dee ascii magic-text-static-2 hack-effect">
		{randomString}
	</pre>
</div>

<style>
	@media (min-width: 1024px) {
		.ascii {
			/* font-size: 0.52rem; */
			transform: perspective(35em) rotateX(15deg) scale(0.9) translateY(-30px);
			opacity: 0.5;
		}
	}
	@media (max-width: 1023px) {
		.ascii {
			opacity: 0.4;
			transform: perspective(35em) rotateX(15deg) scale(0.8) translateY(-30px);
		}
	}

	@media (min-width: 641px) and (max-width: 768px) {
		.ascii {
			transform: perspective(35em) rotateX(15deg) scale(0.8) translateY(-30px);
			/* font-size: 0.36rem; */
		}
	}

	@media (min-width: 476px) and (max-width: 640px) {
		.ascii {
			transform: perspective(35em) rotateX(15deg) scale(0.75) translateY(-30px);
			/* font-size: 0.34rem; */
		}
	}

	@media (max-width: 475px) {
		.ascii {
			transform: perspective(35em) rotateX(15deg) scale(0.7) translateY(-30px);
			/* font-size: 0.29rem; */
		}
	}
</style>
