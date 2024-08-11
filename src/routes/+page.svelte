<script>
    import { cn } from '$lib/utils';
    import { splitProjects } from '$lib/utils.js';
    import { scrollRef } from 'svelte-scrolling';
    /*
     * Components *
     */
    // TODO: Add index.js to components
    import PhAscii from '$components/page_home/PhAscii.svelte';
    import FightAscii from '$components/page_home/FightAscii.svelte';
    import GridBackground from '$components/library/aceternity/components/GridBackground.svelte';
    import Marquee from '$lib/components/page_home/marquee/Marquee.svelte';
    import PrimaryButton from '$components/global/buttons/PrimaryButton.svelte';
    import SecondaryButton from '$components/global/buttons/SecondaryButton.svelte';
    import Spotlight from '$components/library/aceternity/components/Spotlight.svelte';
    import ProjectsIcon from '$lib/components/icons/ProjectsIcon.svelte';
    import SendIcon from '$lib/components/icons/SendIcon.svelte';
    import * as Accordion from '$components/library/shadcn/ui/accordion';
    import Particles from '$components/page_home/Particles.svelte';
    import StarIcon from '$components/icons/StarIcon.svelte';
    import Star2Icon from '$components/icons/Star2Icon.svelte';
    import svg_wheel from '$assets/svg_wheel.svg';
    import ellipse from '$assets/ellipse.svg';
    import svg_outline from '$assets/svg_outline.svg';
    import jeepney from '$assets/jeep.jpg';
    import eyes from '$assets/eyes.png';
    import fish from '$assets/fish.png';
    import store from '$assets/store.png';
    import kids from '$assets/kids.jpg';
    import farm from '$assets/farm.jpg';
    import {
        BentoGrid,
        BentoGridItem
    } from '$components/library/aceternity/bento-grid';

    /*
     * Assets *
     */
    import PilipiNutsLogo from '$assets/logo/logo-plain-green.svg';
    import LogoOutline from '$assets/logo/logo-outline.svg';
    import LogoOutlineGreen from '$assets/logo/logo-outline-green.svg';

    /*
     * Data *
     */
    export let data;
    // console.log(data.projects)
    const sdgData = Object.fromEntries(
        Object.entries(data.sdg).filter(([key]) => key !== '12' && key !== '17')
    );
    const { firstHalf, secondHalf } = splitProjects(data);
    const firstHalfProjects = firstHalf;
    const secondHalfProjects = secondHalf;

    const sdgColors = {
        1: '#E5243B',
        2: '#DDA63A',
        3: '#4C9F38',
        4: '#C5192D',
        5: '#FF3A21',
        6: '#26BDE2',
        7: '#FCC30B',
        8: '#A21942',
        9: '#FD6925',
        10: '#DD1367',
        11: '#FD9D24',
        12: '#BF8B2E',
        13: '#3F7E44',
        14: '#0A97D9',
        15: '#56C02B',
        16: '#00689D',
        17: '#19486A'
    };
</script>

<svelte:head>
    <title>PilipiNuts 2023</title>
</svelte:head>

<!-- Hero Section -->
<div class="container relative contain-paint">
    <main class="relative min-h-[93dvh]">
        <div class="absolute h-full w-[calc(100%-3rem)] animate-fade">
            <Spotlight
                class="absolute top-[1rem] h-[200dvh] max-h-[300%] w-[120dvh] max-w-[300%] translate-x-[-30%] translate-y-[-40%]  animate-spotlight md:h-[100dvh] md:max-h-[100%] md:w-full md:max-w-[100%] md:scale-[1.5]"
            />
        </div>
        <div class="min-h-[93dvh]">
            <GridBackground>
                <section
                    class="relative z-[30] flex h-[93dvh] w-full flex-col items-center py-[5dvh] sm:py-[10dvh] md:items-start md:py-[20dvh]"
                >
                    <div
                        class="flex w-full flex-col items-center gap-[2rem] sm:gap-[3rem] md:w-[60%] md:items-start"
                    >
                        <div class="flex flex-col gap-[1rem]">
                            <h2
                                class="text-center font-[500] leading-tight md:text-left"
                            >
                                The state of <span
                                    class="hidden text-inherit sm:inline"
                                    >Philippine</span
                                ><span class="inline text-inherit sm:hidden"
                                    >PH</span
                                > data: sustainable development goals
                            </h2>
                            <h3
                                class="sans-text text-center leading-tight text-[#bdbdbd] md:text-left"
                            >
                                Look into data science projects highlighting the
                                progress and challenges of sustainable
                                development in the Philippines.
                            </h3>
                        </div>
                        <div
                            class="flex flex-col gap-[1rem] sm:flex-row sm:gap-[1.5rem]"
                        >
                            <PrimaryButton ref="projects" target="_self">
                                <ProjectsIcon class="h-[1em] w-[1em]" />
                                View Projects
                            </PrimaryButton>
                            <SecondaryButton ref="about" target="_self"
                                >Learn More</SecondaryButton
                            >
                        </div>
                    </div>
                </section>
                <div
                    class="absolute bottom-0 right-0 my-auto md:right-[4rem] md:top-0"
                >
                    <PhAscii
                        class="flex h-full w-full flex-col items-end justify-center"
                    />
                </div>
            </GridBackground>
        </div>
    </main>
</div>

<!-- About section -->
<div use:scrollRef={'about'} class="container relative contain-paint">
    <main class="relative flex min-h-[93dvh] flex-col gap-0">
        <section
            class="grid w-full grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[80px,_repeat(2,_minmax(0,_1fr))] md:grid-rows-[80px,_repeat(1,_minmax(0,_1fr))]"
        >
            <div
                class="border-style-thin-left border-style-thin-right"
                style=" mask-image: linear-gradient(5deg, rgba(0, 0, 0, 1.0) 20%, transparent 100%);"
            ></div>
            <div
                class="border-style-thin-right col-span-2 gradient-mask-t-30"
            ></div>
            <div
                class="border-style-thin relative col-span-3 flex flex-col items-center justify-center overflow-hidden md:col-span-1"
            >
                <img
                    src={LogoOutlineGreen}
                    alt="PilipiNuts Logo"
                    class="h-full w-auto p-[3rem] text-[#38c26de1] drop-shadow-[0_0_15px_#38c26df5] md:h-auto md:w-full"
                    style="mask-image: linear-gradient(to top right, transparent, black 40%, black 70%, transparent)"
                />
                <div
                    class="absolute inset-0 h-full w-full bg-cover opacity-40 bg-stripe-[#3e5b4ee1]/[0.5]"
                ></div>
            </div>
            <div
                class="border-style-thin-rb border-style-thin-top border-style-thin-left relative col-span-3 flex flex-col items-center justify-center bg-[#0a0a0a] p-[3rem] text-left md:col-span-2"
            >
                <div class="flex flex-col gap-[1rem]">
                    <h5 class=" font-[500] leading-tight">
                        PilipiNuts: Pilipinas in a Nutshell
                    </h5>
                    <p
                        class="sans-text text-pretty text-left font-[320] leading-[1.7em] text-[#c9c9c9]"
                    >
                        As the culminating project of <a
                            class="sans-text font-[400] text-[#119254] hover:text-[#34bb7a]"
                            href="https://dcs.upd.edu.ph/academics/undergraduate-program/"
                            target="_blank"
                            >CS 132 (Introduction to Data Science)
                        </a>
                        in UP Diliman under the advisory of Instructor Paul Regonia,
                        PilipiNuts 2023 is a symposium of data science projects that
                        tackle emerging socioeconomic problems in the Philippines.
                    </p>
                </div>
                <svg
                    class="absolute -left-[0.5rem] -top-[0.5rem] h-[1rem] w-[1rem] text-[#838383]"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 5v14m-7-7h14"
                        stroke="currentColor"
                        stroke-width="1"
                    />
                </svg>
                <svg
                    class="absolute -bottom-[0.5rem] -left-[0.5rem] h-[1rem] w-[1rem] text-[#838383]"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 5v14m-7-7h14"
                        stroke="currentColor"
                        stroke-width="1"
                    />
                </svg>
                <svg
                    class="absolute -right-[0.5rem] -top-[0.5rem] h-[1rem] w-[1rem] text-[#838383]"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 5v14m-7-7h14"
                        stroke="currentColor"
                        stroke-width="1"
                    />
                </svg>
                <svg
                    class="absolute -bottom-[0.5rem] -right-[0.5rem] h-[1rem] w-[1rem] text-[#838383]"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 5v14m-7-7h14"
                        stroke="currentColor"
                        stroke-width="1"
                    />
                </svg>
            </div>
        </section>
        <section
            class="border-style-thin-left border-style-thin-rb grid w-full grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))]"
        >
            <div
                class="relative col-span-3 flex flex-col items-center justify-center gap-[2rem] overflow-hidden p-[3rem]"
                style=" mask-image: linear-gradient(to right, transparent 5%, rgba(0, 0, 0, 1.0) 30%, rgba(0, 0, 0, 1.0) 70%, transparent 95%);"
            >
                <div
                    class="relative overflow-hidden rounded-[13px] p-[0.8px] text-[#2ba054]"
                    style="background-image: radial-gradient(ellipse farthest-corner at bottom, #2ba054 10%, #7f7f7f60 40%);"
                >
                    <p
                        class="mono-text foot-text flex flex-row items-center gap-[0.25rem] rounded-[24px] px-[10px] py-[5px]"
                        style="background-image: radial-gradient(ellipse farthest-corner at bottom, #2ba054 -50%, #0c0c0c 22%);"
                    >
                        <StarIcon />Featured projects
                    </p>
                </div>

                <Marquee
                    {firstHalfProjects}
                    {secondHalfProjects}
                    class="relative mb-[-2rem] flex w-full flex-col items-center justify-center gap-0"
                ></Marquee>
            </div>
        </section>
        <section
            class="border-style-thin-rb border-style-thin-left relative grid w-full grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] overflow-hidden"
        >
            <!-- <img
                src={ellipse}
                alt="Ellipse"
                class="absolute top-0 z-0 h-full w-auto md:h-auto md:w-full"
            /> -->
            <div class="relative z-10 col-span-3 flex flex-col gap-[0rem]">
                <div
                    class="z-10 flex h-full w-full flex-col gap-[1rem] overflow-hidden p-[2rem] md:p-[3rem]"
                >
                    <h5 class="text-center font-[500] leading-relaxed">
                        42 projects. 15 SDGs. 1 Country.
                    </h5>
                    <p
                        class="sans-text relative w-full text-balance text-center font-[320] leading-[1.7em] text-[#c9c9c9]"
                    >
                        These projects were modeled and conceptualized from the
                        United Nations' Sustainable Development Goals
                        <a
                            class="sans-text font-[400] text-[#119254] hover:text-[#34bb7a]"
                            href="https://sdgs.un.org/goals"
                            target="_blank"
                        >
                            (SDGs)</a
                        >, which are considered to form the global blueprint
                        towards long-term welfare and prosperity. These SDGs
                        contain the necessary objectives to achieve a social
                        equality and sustainable development.
                    </p>
                </div>
                <div
                    class="z-5 relative mt-[-10rem] h-full w-full bg-transparent"
                >
                    <div
                        class="relative bottom-[-10rem] left-0 right-0 m-auto h-fit w-fit overflow-hidden rounded-full p-[1.2px]"
                        style="background: linear-gradient(150deg, 
                            rgba(255,255,255, 0.8), 
                            rgba(235,235,235, 0.2) 20%, 
                            rgba(200,200,200, 0)
                        );"
                    >
                        <div
                            class="relative h-fit w-fit overflow-hidden rounded-full bg-[#000000] p-[2rem] bg-dot-[#999999]/[0.5]"
                        >
                            <img
                                src={svg_wheel}
                                alt="Wheel"
                                class="pulse absolute z-10 h-[50dvw] w-auto opacity-70 blur-[25px] md:h-[45dvh]"
                            />
                            <img
                                src={svg_outline}
                                alt="Wheel"
                                class="spin relative z-10 h-[50dvw] w-auto md:h-[45dvh]"
                            />
                            <div
                                class="absolute inset-0 z-0"
                                style="background: radial-gradient(circle at center, black 0%, transparent 25%, black 95%, transparent 100%);"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="absolute inset-0 z-[5]"
                style="background: radial-gradient(circle at top, black 60%, transparent 100%);"
            ></div>
            <div
                class="absolute inset-0 z-0 shadow-[inset_0_0_20px_15px_#000]"
                style="background-image: url('./bg.svg');
                background-repeat: no-repeat;
                background-blend-mode: normal;
                opacity: 1;
                background-size: cover"
            ></div>
        </section>
        <section
            class="grid w-full grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[1fr,_8rem,_8rem,_8rem]"
        >
            <div
                class="border-style-thin-rb border-style-thin-left col-span-3 flex flex-col items-center justify-center p-[2rem] text-left md:p-[3rem]"
            >
                <p
                    class="sans-text text-center font-[320] leading-[1.7em] text-[#c9c9c9]"
                >
                    Through the lens of data science, the projects of Pilipinuts
                    2023 explore contemporary issues such as climate change,
                    gender inequality, and poverty. They examine the progress
                    made and challenges to overcome in achieving sustainable
                    development within the Philippine context.
                </p>
            </div>
            <div
                class="border-style-thin-right border-style-thin-left relative col-span-3 flex flex-col items-center justify-center overflow-hidden text-left"
            >
                <!-- <img
                    src={farm}
                    alt="Jeepney"
                    class="h-auto w-full object-cover grayscale hover:grayscale-0"
                /> -->
                <video
                    muted
                    autoplay
                    loop
                    playsinline
                    disablepictureinpicture
                    class="absolute top-[-50%] saturate-50 md:top-[-100%]"
                >
                    <source src="/weave.webm" type="video/webm" />
                </video>
                <div
                    class="absolute inset-0 z-10"
                    style={`
                        background-image: url('/noise.png');
                        background-size: 20px 20px;
                        background-repeat: repeat;
                        mix-blend-mode: overlay;
                        opacity: 1;
                    `}
                ></div>
                <!-- <div
                    class="absolute inset-0 z-[5]"
                    style="background: linear-gradient(to bottom, black 5%, transparent 100%);"
                ></div> -->
            </div>
            <div
                class="border-style-thin-right border-style-thin-left relative col-span-3 flex flex-col items-center justify-center overflow-hidden text-left"
            >
                <!-- <img
                    src={eyes}
                    alt="Jeepney"
                    class="h-auto w-full object-cover grayscale hover:grayscale-0"
                /> -->
                <video
                    muted
                    autoplay
                    loop
                    playsinline
                    disablepictureinpicture
                    class="saturate-50"
                >
                    <source src="/traffic.webm" type="video/webm" />
                </video>
                <div
                    class="absolute inset-0 z-10"
                    style={`
                        background-image: url('/noise.png');
                        background-size: 20px 20px;
                        background-repeat: repeat;
                        mix-blend-mode: overlay;
                        opacity: 1;
                    `}
                ></div>
            </div>
            <div
                class="border-style-thin-right border-style-thin-left relative col-span-3 flex flex-col items-center justify-center overflow-hidden text-left"
            >
                <!-- <img
                    src={kids}
                    alt="Jeepney"
                    class="h-auto w-full object-cover grayscale hover:grayscale-0"
                /> -->
                <video
                    muted
                    autoplay
                    loop
                    playsinline
                    disablepictureinpicture
                    class="absolute inset-0 m-auto saturate-50"
                >
                    <source src="/boat.webm" type="video/webm" />
                </video>
                <div
                    class="absolute inset-0 z-10"
                    style={`
                        background-image: url('/noise.png');
                        background-size: 20px 20px;
                        background-repeat: repeat;
                        mix-blend-mode: overlay;
                        opacity: 1;
                    `}
                ></div>
                <!-- <div
                    class="absolute inset-0 z-[5]"
                    style="background: linear-gradient(to top, black 5%, transparent 100%);"
                ></div> -->
            </div>
        </section>
        <section
            class="border-style-thin-rb border-style-thin-left relative grid w-full grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] overflow-hidden"
        >
            <div
                class=" relative col-span-3 flex flex-col items-center justify-center overflow-hidden p-[2rem] text-left md:p-[3rem]"
            >
                <h5
                    class="relative z-10 w-full text-balance text-center font-[400] leading-[1.5em]"
                >
                    When done right, data science not only provide us with an
                    opinion to observe;
                </h5>
                <h5
                    class="relative z-10 mb-[1rem] w-full text-balance text-center font-[400] leading-[1.5em] text-[#00e582]"
                >
                    it enables us to take action towards social good.
                </h5>
                <FightAscii />
            </div>
            <div
                class="absolute inset-0 z-[5]"
                style="background: radial-gradient(ellipse at bottom, black 50%, transparent 100%);"
            ></div>
            <div
                class="absolute inset-0 z-0 m-auto shadow-[inset_0_0_20px_15px_#000]"
                style="background-image: url('./bg.svg');
                        background-repeat: no-repeat;
                        background-blend-mode: normal;
                        opacity: 1;
                        background-size: cover"
            ></div>
        </section>
    </main>
</div>

<!-- SDG section -->
<div use:scrollRef={'projects'} class="container relative">
    <main class="relative flex min-h-[93dvh] flex-col gap-0">
        <section
            class="grid w-full grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[2rem,_repeat(1,_minmax(0,_1fr)),_2rem]"
        >
            <div
                class="border-style-thin-rb border-style-thin-left relative col-span-3 overflow-hidden"
            ></div>
            <div
                class="border-style-thin-rb border-style-thin-left relative col-span-3 flex flex-col items-center justify-center gap-[2rem] bg-[#070707] p-[2rem] text-left md:p-[3rem]"
            >
                <div
                    class="relative overflow-hidden rounded-[13px] p-[0.8px] text-[#2ba054]"
                    style="background-image: radial-gradient(ellipse farthest-corner at bottom, #2ba054 10%, #7f7f7f60 40%);"
                >
                    <p
                        class="mono-text foot-text flex flex-row items-center gap-[0.25rem] rounded-[24px] px-[10px] py-[5px]"
                        style="background-image: radial-gradient(ellipse farthest-corner at bottom, #2ba054 -50%, #0c0c0c 25%);"
                    >
                        <Star2Icon class="mt-[-1px]" />View all projects by SDG
                    </p>
                </div>
                <BentoGrid class="mx-auto max-w-full md:auto-rows-[8.5rem]">
                    {#each Object.entries(sdgData) as [key, sdg]}
                        <a
                            data-sveltekit-preload-code="tap"
                            target="_self"
                            href={`/sdg-${key}/projects`}
                            class="h-full w-full"
                        >
                            <BentoGridItem
                                title={sdg.Title}
                                description={sdg.Description}
                                class={sdg.class}
                            >
                                <div
                                    slot="icon"
                                    style="background:radial-gradient(
								ellipse at top left,
								{sdgColors[key]} -300%, 
								#2c2c2c99 85%, 
								#2c2c2caa 100%
							);"
                                    class={cn('h-full w-full text-[#2c2c2c]')}
                                ></div>
                            </BentoGridItem>
                        </a>
                    {/each}
                </BentoGrid>
                <svg
                    class="absolute -left-[0.5rem] -top-[0.5rem] h-[1rem] w-[1rem] text-[#838383]"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 5v14m-7-7h14"
                        stroke="currentColor"
                        stroke-width="1"
                    />
                </svg>
                <svg
                    class="absolute -bottom-[0.5rem] -left-[0.5rem] h-[1rem] w-[1rem] text-[#838383]"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 5v14m-7-7h14"
                        stroke="currentColor"
                        stroke-width="1"
                    />
                </svg>
                <svg
                    class="absolute -right-[0.5rem] -top-[0.5rem] h-[1rem] w-[1rem] text-[#838383]"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 5v14m-7-7h14"
                        stroke="currentColor"
                        stroke-width="1"
                    />
                </svg>
                <svg
                    class="absolute -bottom-[0.5rem] -right-[0.5rem] h-[1rem] w-[1rem] text-[#838383]"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 5v14m-7-7h14"
                        stroke="currentColor"
                        stroke-width="1"
                    />
                </svg>
            </div>
            <div
                class="border-style-thin-rb border-style-thin-left relative col-span-3 overflow-hidden"
            ></div>
        </section>
    </main>
</div>

<div use:scrollRef={'contacts'} class="container relative mb-[8rem] !min-h-fit">
    <main class="relative flex min-h-fit flex-col gap-0">
        <!-- <section
            class="grid w-full grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[1fr,_2rem]"
        >
            <div
                class="border-style-thin-rb border-style-thin-left relative col-span-3 flex flex-col items-center justify-center gap-[1rem] bg-[#000000] p-[2rem] text-left md:p-[3rem]"
            >
                <h5
                    class="sans-text w-full text-center font-[400] md:text-left"
                >
                    Frequently Asked Questions
                </h5>
                <Accordion.Root class="w-full">
                    <Accordion.Item value="item-1">
                        <Accordion.Trigger>
                            <p
                                class="small-text duration-200 group-hover/accordion:font-[700]"
                            >
                                Why are there only 15 SDGs covered?
                            </p>
                        </Accordion.Trigger>
                        <Accordion.Content>
                            <p class="sans-text text-white">Meow</p>
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item value="item-2">
                        <Accordion.Trigger>
                            <p
                                class="small-text duration-200 group-hover/accordion:font-[700]"
                            >
                                Who made all these projects?
                            </p>
                        </Accordion.Trigger>
                        <Accordion.Content>
                            <p class="sans-text text-white">Meow</p>
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item value="item-3">
                        <Accordion.Trigger>
                            <p
                                class="small-text duration-200 group-hover/accordion:font-[700]"
                            >
                                Is it accessible?
                            </p>
                        </Accordion.Trigger>
                        <Accordion.Content>
                            <p class="sans-text text-white">
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </p>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            </div>
            <div
                class="border-style-thin-rb border-style-thin-left relative col-span-3 overflow-hidden"
            ></div>
        </section> -->
        <section
            class="grid w-full grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))]"
        >
            <div
                class="group/contact border-style-thin-rb border-style-thin-left relative col-span-3 overflow-hidden"
            >
                <div
                    class="relative z-10 flex w-full flex-col items-center gap-[1.5rem] p-[3rem] sm:flex-row"
                >
                    <h4 class="sans-text text-left font-[400]">
                        Got questions?
                    </h4>
                    <PrimaryButton
                        href="https://forms.gle/xJjH4GYE6TQbxkkPA"
                        target="_blank"
                    >
                        <SendIcon class="h-[1em] w-[1em]" />
                        Send it here!
                    </PrimaryButton>
                </div>
                <div
                    class="absolute inset-[-5rem] z-0 duration-200 bg-dot-[#656565f1] group-hover/contact:translate-x-7 group-hover/contact:translate-y-7 group-hover/contact:brightness-200"
                ></div>
            </div>
        </section>
    </main>
</div>

<!-- About Us section -->
<div class="container relative !min-h-[50dvh]">
    <div class="relative h-[1px] overflow-hidden">
        <div class="h-[1px] border-t-[1px] border-t-[#7f7f7f60]"></div>
        <div
            class="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-black via-black sm:w-[5%]"
        ></div>
        <div
            class="pointer-events-none absolute inset-y-0 right-0 w-0 bg-gradient-to-l from-black via-black sm:w-[5%]"
        ></div>
    </div>
    <nav class="relative flex min-h-[50dvh] flex-col justify-between py-[4rem]">
        <div
            class="relative z-50 flex h-full flex-col items-center justify-between gap-[1rem] bg-black px-[1rem] sm:px-[4rem] md:flex-row"
        >
            <div class="flex w-fit flex-row items-center gap-[0.5rem]">
                <img
                    src={PilipiNutsLogo}
                    alt="PilipiNuts Logo"
                    class="h-[20px] w-auto"
                />
                <p class="mono-text text-[#989898]">PilipiNuts</p>
                <p class="sans-text text-[#989898]">©</p>
                <p class="mono-text text-[#989898]">
                    {new Date().getFullYear()}
                </p>
            </div>
            <div class="flex flex-col gap-[0.5rem] items-end">
                <p class="mono-text text-[#989898]">More about</p>
                <div class="flex w-fit flex-row items-center gap-[4rem]">
                    <h3>CS 132</h3>
                    <h3>Paul Regonia</h3>
                </div>
            </div>
        </div>
        <!-- <div
            class="relative z-50 flex h-full flex-row items-center justify-between bg-black px-[1rem] sm:px-[4rem]"
        >
            <div class="flex w-full flex-grow flex-row justify-end">
                <p class="foot-text font-[100]">
                    Website made with ♥ by Arki Mañago, Denzell Dy, Elijah
                    Mejilla, Brill Riña
                </p>
            </div>
        </div> -->
    </nav>
</div>

<style>
    .contain-paint {
        contain: paint;
    }
    .overflow-content {
        overflow-x: auto;
        overscroll-behavior-x: contain;
        scroll-snap-type: x mandatory;
        scroll-padding: var(--spacing-3);
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    /* .filter-grain {
		backdrop-filter: url(#noiseFilter);
		-webkit-backdrop-filter: url(#noiseFilter);
	} */

    /* #gradient-marquee::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%);
		width: 100%;
		height: 100%;
		background: radial-gradient(circle at bottom, rgba(45, 45, 45, 0.179), transparent 40%);
		pointer-events: none;
	} */
</style>
