// import { fontFamily } from "tailwindcss/defaultTheme";
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const svgToDataUri = require('mini-svg-data-uri');

const config = {
    darkMode: ['class'],
    content: ['./src/**/*.{html,js,svelte,ts}'],
    safelist: ['dark'],
    theme: {
        container: {
            center: true,
            // padding: "2rem",
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            animation: {
                'border-beam':
                    'border-beam calc(var(--duration)*1s) infinite linear',
                spotlight: 'spotlight 12s ease 1000ms infinite',
                fade: 'fade 1000ms ease-in-out'
            },
            keyframes: {
                'border-beam': {
                    '100%': {
                        'offset-distance': '100%'
                    }
                },
                spotlight: {
                    '0%': {
                        transform: 'translate(-30%,-40%) scale(1.5)'
                    },
                    '20%': {
                        transform: 'translate(-35%,-35%) scale(1.6)' // Increased translate and scale
                    },
                    '35%': {
                        transform: 'translate(-38%,-45%) scale(1.65)' // Increased translate and scale
                    },
                    '50%': {
                        transform: 'translate(-30%,-40%) scale(1.7)' // Increased scale significantly
                    },
                    '70%': {
                        transform: 'translate(-35%,-38%) scale(1.65)' // Increased translate and scale
                    },
                    '80%': {
                        transform: 'translate(-30%,-35%) scale(1.6)' // Increased translate and scale
                    },
                    '100%': {
                        transform: 'translate(-30%,-40%) scale(1.5)'
                    }
                },
                fade: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 }
                }
            },
            colors: {
                border: 'hsl(var(--border) / <alpha-value>)',
                input: 'hsl(var(--input) / <alpha-value>)',
                ring: 'hsl(var(--ring) / <alpha-value>)',
                background: 'hsl(var(--background) / <alpha-value>)',
                foreground: 'hsl(var(--foreground) / <alpha-value>)',
                primary: {
                    DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
                    foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
                    foreground:
                        'hsl(var(--secondary-foreground) / <alpha-value>)'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
                    foreground:
                        'hsl(var(--destructive-foreground) / <alpha-value>)'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
                    foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
                    foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
                    foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
                },
                card: {
                    DEFAULT: 'hsl(var(--card) / <alpha-value>)',
                    foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
            // fontFamily: {
            // 	sans: [...fontFamily.sans]
            // }
        }
    },
    corePlugins: {
        aspectRatio: false
    },
    plugins: [
        require('tailwind-gradient-mask-image'),
        aspectRatio,
        addVariablesForColors,
        function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'bg-grid': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`
                    }),
                    'bg-grid-dash': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.25H15.75V16" stroke="${value}" stroke-width="0.5" stroke-dasharray="3 3"/></svg>`
                        )}")`
                    }),
                    'bg-stripe': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg width="291" height="291" viewBox="0 0 291 291" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_267_326)">
								<line x1="72.1368" y1="-73.7924" x2="-73.7875" y2="72.1319" stroke="${value}"/>
								<line x1="74.9629" y1="-70.9633" x2="-70.9614" y2="74.961" stroke="${value}"/>
								<line x1="77.7911" y1="-68.1352" x2="-68.1332" y2="77.7891" stroke="${value}"/>
								<line x1="80.6192" y1="-65.3056" x2="-65.3051" y2="80.6187" stroke="${value}"/>
								<line x1="83.4532" y1="-62.4809" x2="-62.4711" y2="83.4434" stroke="${value}"/>
								<line x1="86.2793" y1="-59.6513" x2="-59.645" y2="86.273" stroke="${value}"/>
								<line x1="89.1075" y1="-56.8217" x2="-56.8168" y2="89.1026" stroke="${value}"/>
								<line x1="91.9356" y1="-53.9936" x2="-53.9887" y2="91.9307" stroke="${value}"/>
								<line x1="94.7618" y1="-51.1645" x2="-51.1625" y2="94.7598" stroke="${value}"/>
								<line x1="97.5899" y1="-48.3349" x2="-48.3344" y2="97.5894" stroke="${value}"/>
								<line x1="100.424" y1="-45.5102" x2="-45.5004" y2="100.414" stroke="${value}"/>
								<line x1="103.25" y1="-42.6806" x2="-42.6743" y2="103.244" stroke="${value}"/>
								<line x1="108.281" y1="-42.644" x2="-37.643" y2="103.28" stroke="${value}"/>
								<line x1="111.107" y1="-39.8149" x2="-34.8168" y2="106.109" stroke="${value}"/>
								<line x1="113.936" y1="-36.9868" x2="-31.9887" y2="108.938" stroke="${value}"/>
								<line x1="116.764" y1="-34.1572" x2="-29.1606" y2="111.767" stroke="${value}"/>
								<line x1="119.598" y1="-31.3325" x2="-26.3266" y2="114.592" stroke="${value}"/>
								<line x1="122.424" y1="-28.5029" x2="-23.5004" y2="117.421" stroke="${value}"/>
								<line x1="125.252" y1="-25.6733" x2="-20.6723" y2="120.251" stroke="${value}"/>
								<line x1="128.08" y1="-22.8452" x2="-17.8442" y2="123.079" stroke="${value}"/>
								<line x1="130.906" y1="-20.0161" x2="-15.018" y2="125.908" stroke="${value}"/>
								<line x1="133.734" y1="-17.1865" x2="-12.1899" y2="128.738" stroke="${value}"/>
								<line x1="136.568" y1="-14.3618" x2="-9.3559" y2="131.563" stroke="${value}"/>
								<line x1="139.395" y1="-11.5322" x2="-6.52972" y2="134.392" stroke="${value}"/>
								<line x1="195.719" y1="-62.0815" x2="-51.0818" y2="184.719" stroke="${value}"/>
								<line x1="198.545" y1="-59.2514" x2="-48.2556" y2="187.549" stroke="${value}"/>
								<line x1="201.373" y1="-56.4233" x2="-45.4275" y2="190.377" stroke="${value}"/>
								<line x1="204.201" y1="-53.5937" x2="-42.5993" y2="193.207" stroke="${value}"/>
								<line x1="207.039" y1="-50.7719" x2="-39.7614" y2="196.029" stroke="${value}"/>
								<line x1="209.863" y1="-47.9409" x2="-36.9372" y2="198.86" stroke="${value}"/>
								<line x1="212.689" y1="-45.1108" x2="-34.1111" y2="201.69" stroke="${value}"/>
								<line x1="215.518" y1="-42.2827" x2="-31.2829" y2="204.518" stroke="${value}"/>
								<line x1="218.344" y1="-39.4526" x2="-28.4568" y2="207.348" stroke="${value}"/>
								<line x1="221.172" y1="-36.623" x2="-25.6286" y2="210.178" stroke="${value}"/>
								<line x1="224.01" y1="-33.8012" x2="-22.7907" y2="212.999" stroke="${value}"/>
								<line x1="226.834" y1="-30.9702" x2="-19.9665" y2="215.83" stroke="${value}"/>
								<line x1="261.082" y1="-59.4409" x2="-42.4369" y2="244.078" stroke="${value}"/>
								<line x1="263.906" y1="-56.6103" x2="-39.6126" y2="246.909" stroke="${value}"/>
								<line x1="266.734" y1="-53.7822" x2="-36.7845" y2="249.737" stroke="${value}"/>
								<line x1="269.563" y1="-50.9521" x2="-33.9564" y2="252.567" stroke="${value}"/>
								<line x1="272.402" y1="-48.1323" x2="-31.1166" y2="255.387" stroke="${value}"/>
								<line x1="275.225" y1="-45.3007" x2="-28.2943" y2="258.218" stroke="${value}"/>
								<line x1="278.053" y1="-42.4702" x2="-25.4662" y2="261.049" stroke="${value}"/>
								<line x1="280.881" y1="-39.6421" x2="-22.638" y2="263.877" stroke="${value}"/>
								<line x1="283.705" y1="-36.8115" x2="-19.8138" y2="266.707" stroke="${value}"/>
								<line x1="286.533" y1="-33.9814" x2="-16.9857" y2="269.538" stroke="${value}"/>
								<line x1="289.373" y1="-31.1616" x2="-14.1459" y2="272.357" stroke="${value}"/>
								<line x1="292.195" y1="-28.33" x2="-11.3236" y2="275.189" stroke="${value}"/>
								<line x1="305.148" y1="-35.5127" x2="-12.5127" y2="282.149" stroke="${value}"/>
								<line x1="307.973" y1="-32.6821" x2="-9.68848" y2="284.979" stroke="${value}"/>
								<line x1="310.801" y1="-29.854" x2="-6.86036" y2="287.807" stroke="${value}"/>
								<line x1="313.629" y1="-27.0234" x2="-4.03223" y2="290.638" stroke="${value}"/>
								<line x1="316.469" y1="-24.2041" x2="-1.19239" y2="293.457" stroke="${value}"/>
								<line x1="319.293" y1="-21.3725" x2="1.63183" y2="296.289" stroke="${value}"/>
								<line x1="322.119" y1="-18.542" x2="4.458" y2="299.119" stroke="${value}"/>
								<line x1="324.947" y1="-15.7138" x2="7.28613" y2="301.947" stroke="${value}"/>
								<line x1="327.772" y1="-12.8833" x2="10.1103" y2="304.778" stroke="${value}"/>
								<line x1="330.6" y1="-10.0527" x2="12.9385" y2="307.608" stroke="${value}"/>
								<line x1="333.439" y1="-7.23336" x2="15.7783" y2="310.428" stroke="${value}"/>
								<line x1="336.264" y1="-4.40182" x2="18.6025" y2="313.259" stroke="${value}"/>
								<line x1="350.082" y1="-12.4463" x2="16.5547" y2="321.081" stroke="${value}"/>
								<line x1="352.906" y1="-9.6152" x2="19.3789" y2="323.912" stroke="${value}"/>
								<line x1="355.734" y1="-6.78707" x2="22.207" y2="326.74" stroke="${value}"/>
								<line x1="358.563" y1="-3.9565" x2="25.0352" y2="329.571" stroke="${value}"/>
								<line x1="361.402" y1="-1.13766" x2="27.875" y2="332.39" stroke="${value}"/>
								<line x1="364.227" y1="1.69389" x2="30.6992" y2="335.221" stroke="${value}"/>
								<line x1="367.053" y1="4.52445" x2="33.5254" y2="338.052" stroke="${value}"/>
								<line x1="369.881" y1="7.35258" x2="36.3535" y2="340.88" stroke="${value}"/>
								<line x1="372.705" y1="10.1836" x2="39.1777" y2="343.711" stroke="${value}"/>
								<line x1="375.533" y1="13.0142" x2="42.0059" y2="346.542" stroke="${value}"/>
								<line x1="378.373" y1="15.833" x2="44.8457" y2="349.36" stroke="${value}"/>
								<line x1="381.197" y1="18.6651" x2="47.6699" y2="352.192" stroke="${value}"/>
								<line x1="386.877" y1="19.3594" x2="83.3581" y2="322.878" stroke="${value}"/>
								<line x1="389.701" y1="22.19" x2="86.1823" y2="325.709" stroke="${value}"/>
								<line x1="392.529" y1="25.0181" x2="89.0104" y2="328.537" stroke="${value}"/>
								<line x1="395.357" y1="27.8482" x2="91.8385" y2="331.367" stroke="${value}"/>
								<line x1="398.197" y1="30.668" x2="94.6784" y2="334.187" stroke="${value}"/>
								<line x1="401.02" y1="33.4995" x2="97.5006" y2="337.018" stroke="${value}"/>
								<line x1="403.848" y1="36.3301" x2="100.329" y2="339.849" stroke="${value}"/>
								<line x1="406.676" y1="39.1582" x2="103.157" y2="342.677" stroke="${value}"/>
								<line x1="409.5" y1="41.9888" x2="105.981" y2="345.508" stroke="${value}"/>
								<line x1="412.328" y1="44.8189" x2="108.809" y2="348.338" stroke="${value}"/>
								<line x1="415.168" y1="47.6387" x2="111.649" y2="351.158" stroke="${value}"/>
								<line x1="417.99" y1="50.4703" x2="114.471" y2="353.989" stroke="${value}"/>
								<line x1="430.943" y1="43.2876" x2="113.282" y2="360.949" stroke="${value}"/>
								<line x1="433.768" y1="46.1182" x2="116.106" y2="363.779" stroke="${value}"/>
								<line x1="436.596" y1="48.9463" x2="118.935" y2="366.608" stroke="${value}"/>
								<line x1="439.424" y1="51.7769" x2="121.763" y2="369.438" stroke="${value}"/>
								<line x1="442.264" y1="54.5962" x2="124.603" y2="372.257" stroke="${value}"/>
								<line x1="445.088" y1="57.4278" x2="127.427" y2="375.089" stroke="${value}"/>
								<line x1="447.914" y1="60.2583" x2="130.253" y2="377.92" stroke="${value}"/>
								<line x1="450.742" y1="63.0865" x2="133.081" y2="380.748" stroke="${value}"/>
								<line x1="453.566" y1="65.917" x2="135.905" y2="383.578" stroke="${value}"/>
								<line x1="456.395" y1="68.7476" x2="138.733" y2="386.409" stroke="${value}"/>
								<line x1="459.234" y1="71.5669" x2="141.573" y2="389.228" stroke="${value}"/>
								<line x1="462.059" y1="74.3985" x2="144.397" y2="392.06" stroke="${value}"/>
								<line x1="475.877" y1="66.354" x2="142.35" y2="399.881" stroke="${value}"/>
								<line x1="478.701" y1="69.1851" x2="145.174" y2="402.712" stroke="${value}"/>
								<line x1="481.529" y1="72.0132" x2="148.002" y2="405.541" stroke="${value}"/>
								<line x1="484.357" y1="74.8438" x2="150.83" y2="408.371" stroke="${value}"/>
								<line x1="487.197" y1="77.6626" x2="153.67" y2="411.19" stroke="${value}"/>
								<line x1="490.022" y1="80.4942" x2="156.494" y2="414.022" stroke="${value}"/>
								<line x1="492.848" y1="83.3247" x2="159.32" y2="416.852" stroke="${value}"/>
								<line x1="495.676" y1="86.1529" x2="162.148" y2="419.68" stroke="${value}"/>
								<line x1="498.5" y1="88.9839" x2="164.973" y2="422.511" stroke="${value}"/>
								<line x1="501.328" y1="91.8145" x2="167.801" y2="425.342" stroke="${value}"/>
								<line x1="504.168" y1="94.6333" x2="170.641" y2="428.161" stroke="${value}"/>
								<line x1="506.992" y1="97.4654" x2="173.465" y2="430.993" stroke="${value}"/>
								</g>
								<defs>
								<clipPath id="clip0_267_326">
								<rect width="291" height="291" fill="white"/>
								</clipPath>
								</defs>
							</svg>`
                        )}")`
                    }),
                    'bg-grid-small': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`
                    }),
                    'bg-dot': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
                        )}")`
                    })
                },
                {
                    values: flattenColorPalette(theme('backgroundColor')),
                    type: 'color'
                }
            );
        }
    ]
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme('colors'));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ':root': newVars
    });
}

export default config;
