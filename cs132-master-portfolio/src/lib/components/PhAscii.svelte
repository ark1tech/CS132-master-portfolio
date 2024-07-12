<script>
	import { onMount } from 'svelte';
	import { useMotionValue, Motion } from 'svelte-motion';

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);
	let isHovering = false; // Flag to track mouse hover state

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
	let pendingUpdate = false;

	const radius = 120; // Radius in pixels
	const lineHeight = 12; // Approximate line height in pixels
	const charWidth = 6; // Approximate character width in pixels
	const updateDelay = 80; // Delay in milliseconds

	onMount(() => {
		randomString = originalAsciiArt;
	});

	function onMouseMove(event) {
		const { currentTarget, clientX, clientY } = event;
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	function onMouseEnter() {
		isHovering = true;
	}

	function onMouseLeave() {
		isHovering = false;
		randomString = originalAsciiArt; // Reset to original art when not hovering
	}

	$: if (mouseX && mouseY && !pendingUpdate && isHovering) {
		pendingUpdate = true;
		setTimeout(() => {
			randomString = replaceCharactersAroundMouse(originalAsciiArt, mouseX.get(), mouseY.get());
			pendingUpdate = false;
		}, updateDelay);
	}

	const characters = '10';
	const replaceCharactersAroundMouse = (str, mouseX, mouseY) => {
		const lines = str.split('\n');
		const mouseLine = Math.floor(mouseY / lineHeight);
		const mouseChar = Math.floor(mouseX / charWidth);

		for (
			let i = Math.max(0, mouseLine - Math.ceil(radius / lineHeight));
			i <= Math.min(lines.length - 1, mouseLine + Math.ceil(radius / lineHeight));
			i++
		) {
			const line = lines[i].split('');
			for (
				let j = Math.max(0, mouseChar - Math.ceil(radius / charWidth));
				j <= Math.min(line.length - 1, mouseChar + Math.ceil(radius / charWidth));
				j++
			) {
				const charX = j * charWidth;
				const charY = i * lineHeight;
				const distance = Math.sqrt((charX - mouseX) ** 2 + (charY - mouseY) ** 2);
				if (distance <= radius && line[j] !== ' ' && line[j] !== '\n') {
					line[j] = characters.charAt(Math.floor(Math.random() * characters.length));
				}
			}
			lines[i] = line.join('');
		}

		return lines.join('\n');
	};
</script>

<div
  class="select-none cursor-crosshair"
	on:mousemove={onMouseMove}
	on:mouseenter={onMouseEnter}
	on:mouseleave={onMouseLeave}
	role="presentation"
>
	<Motion let:motion>
		<div use:motion class="ascii magic-text">
			{randomString}
		</div>
	</Motion>
</div>
