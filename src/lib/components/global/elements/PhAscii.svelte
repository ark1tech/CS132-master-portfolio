<script>
	import { onMount } from 'svelte';

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
	const updateInterval = 20; // Interval in milliseconds for updates
	const resetDelay = 6000; // Delay in milliseconds before resetting

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
		startAnimation(); // Start the animation when the component mounts

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

<div class="select-none" role="presentation">
	<div class="ascii magic-text threedee-effect">
		{randomString}
	</div>
</div>
