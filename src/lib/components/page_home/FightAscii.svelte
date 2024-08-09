<script>
    import { onMount } from 'svelte';
    import { cn } from '$lib/utils';
    export let className = undefined;
    export { className as class };

    const originalAsciiArt = `
       @@@%@@@%%@@          @@@@           
     @@@%       -@@@@  @@@@@@#%@@@@@@      
   @@@              @@@@           -@@@    
 @@@                @*                @@@  
 @@               @@                   @@@ 
@@              %@      @@@             @@ 
@@            -@      @@   @@           -@@
@@           @@     %@       @@          @@
@@:           :%@@@=           @*        @@
 @@                      #@      @      @@@
 @@%      :@@              @*      @   .@@ 
  @@@   =@   +@      @@      @-     -@@@@  
    @@@@     :@@       @@     .@     @@@   
     @@     @@   @@      @%     #@  %@@    
     @@@  #@     *@#       @=    *@@@@     
       @@@@     @@   @      -@   @@        
         @@@  @@     @@       @@@@         
           @@@@     @@. #@-  @@@           
             @@-  +@     @@@@@             
              @@@@@     @@@                
                 @@   @@@                  
                  @@@@@@`;

    let randomString = originalAsciiArt;

    const characters = '1234567890';
    const updateInterval = 30; // Interval in milliseconds for updates
    const resetDelay = 1100; // Delay in milliseconds before resetting

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
                randomString = replaceCharactersFromBottom(
                    randomString,
                    currentLine
                );
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

<div class={cn('relative z-[10]', className)} role="button">
    <pre
        class="ascii magic-text-static-2 hack-effect my-[-20%] scale-[0.5] cursor-default font-[600]">
		{randomString}
	</pre>
    <pre
        class="ascii magic-text-static-2 absolute inset-0 my-[-20%] scale-[0.5] animate-ping cursor-default font-[600] blur-md brightness-200">
		{originalAsciiArt}
	</pre>
</div>

<style>
    @keyframes ping {
        75%,
        100% {
            transform: scale(0.65);
            opacity: 0;
        }
    }
    .animate-ping {
        animation: ping 2s cubic-bezier(0.1, 0.82, 0.51, 0.48) infinite;
    }
    /* @media (min-width: 1024px) {
		.ascii {
			transform:scale(0.5);
			opacity: 0.5;
		}
	}
	@media (max-width: 1023px) {
		.ascii {
			opacity: 0.4;
			transform: scale(0.5);
		}
	}

	@media (min-width: 641px) and (max-width: 768px) {
		.ascii {
			transform:scale(0.5);
		}
	}

	@media (min-width: 476px) and (max-width: 640px) {
		.ascii {
			transform:scale(0.5);
		}
	}

	@media (max-width: 475px) {
		.ascii {
			transform:scale(0.5);
		}
	} */
</style>
