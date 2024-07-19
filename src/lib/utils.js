import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';


// Class names for components
export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

// Animations 
export const flyAndScale = (node, params = { y: -8, x: 0, start: 0.95, duration: 150 }) => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA, scaleA, scaleB) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style) => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

// See how the options work here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

export const lazyLoad = (image, src) => {
    const loaded = () => {
        //image.classList.add('visible')                          // doesn't work in REPL
			  image.style.opacity = "1"                                 // REPL hack to apply loading animation
    }
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
					  console.log('an image has loaded')                  // console log for REPL
            image.src = src                                     // replace placeholder src with the image src on observe
            if (image.complete) {                               // check if instantly loaded
                loaded()        
            } else {
                image.addEventListener('load', loaded)          // if the image isn't loaded yet, add an event listener
            }
        }
    }, options)
    observer.observe(image)                                     // intersection observer

    return {
        destroy() {
            image.removeEventListener('load', loaded)           // clean up the event listener
        }
    }
}