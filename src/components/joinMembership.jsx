import { useState } from "react";
import { useCheckDesktop } from '../hooks/useCheckWidth'
const images = [
    {
        title: 'Releasing Lunaris back to the ocean',
        src: '/screenshots/rescue.jpg'
    },
    {
        title: 'Watch otter feeding session live',
        src: '/screenshots/otter3.webp'
    },
    {
        title: 'Watch the fishes swim by the coral reefs',
        src: '/screenshots/aquarium.jpg'
    }
]

export function JoinMembership() {
    const showSlider = useCheckDesktop(600);
    return (
        <section className='p-6 flex flex-col gap-6'>
            <div>
                <h1 className='text-3xl font-extrabold text-accent-bg'>Become a member</h1>
                <h2 className='text-xl'>Every cent goes toward helping an animal</h2>
            </div>
            <div className='sm:grid sm:grid-cols-3 max-w-300
            flex flex-wrap gap-6'>
                <div
                    className='sm:grid grid-cols-2 flex flex-wrap text-surface-fg col-span-3 gap-6
                        bg-surface-bg w-full p-6 rounded-lg relative border-b-2 border-accent-bg/20'>
                    <div className="flex flex-col gap-4">
                        <h1 className='text-3xl font-extrabold'>Watch it live</h1>
                        <h2 className='text-lg'>See rescues, releases, and cleanup missions as they happen, on various platforms</h2>
                        <p className="text-sm">We keep you updated on whats happening at the aquarium - every hour</p>
                        <p className="text-sm">Join 200k+ members watching and taking part in live events.</p>
                        <SocialIcons />
                        <div className="bg-primary-bg/10 outline outline-primary-bg border-l-6 border-accent-bg mt-auto rounded p-2">
                            <p>
                                1.2 million gallons run through our closed-loop filtration system — no ocean water is ever discharged untreated,
                                and the facility runs on 40% recycled seawater.
                            </p>
                            <p>
                                AZA-accredited since 2011 — one of only 4 aquariums in the region held to that standard.
                            </p>
                        </div>
                    </div>
                    {!showSlider &&
                        <Slider list={images} />
                    }
                </div>
                <div
                    className='flex flex-col gap-4 text-surface-fg
                        bg-surface-bg w-full px-6 py-4 rounded-lg'>
                    <h3 className='text-lg font-extrabold'>Stay connected</h3>
                    <h4 className='text-md'>Get notified every time we bring a change</h4>
                    <p>We email and post updates every time we rescue an animal, help the environment, or release an animal back into the wild.</p>
                    <button className='text-left text-surface-muted-fg mt-auto'>details &gt;&gt;</button>
                </div>
                <div
                    className='flex flex-col gap-4 text-surface-fg
                        bg-surface-bg w-full p-4 rounded-lg'>
                    <h3 className='text-lg font-extrabold'>Name a rescued animal</h3>
                    <h4 className='text-md'>Take part in our naming events</h4>
                    <p>Members get the chance to name the animals we bring in — join an event and cast your vote.</p>
                    <button className='text-left text-surface-muted-fg'>details &gt;&gt;</button>
                </div>
                <div
                    className='flex flex-col gap-4 text-surface-fg
                        bg-surface-bg w-full p-4 rounded-lg'>
                    <div className="flex gap-4">
                        <h3 className='text-2xl font-extrabold'>Save 10%</h3>
                    </div>
                    <h4 className='text-md'>A member's only discount on every ticket</h4>
                    <p>Enjoy 10% off tickets and store purchases at the aquarium.</p>
                    <button className='text-left text-surface-muted-fg'>details &gt;&gt;</button>
                </div>
            </div>
        </section>
    )
}

function SocialIcons() {
    const socialIconClass = 'flex flex-col items-center justify-center gap-1 w-10';
    const iconWrapClass = 'w-6 h-6 sm:h-8 sm:w-8 flex items-center justify-center';
    const linkStyles = 'text-xs text-center font-bold text-surface-muted-fg';

    return (
        <div className="flex gap-6 p-2">
            <div className={socialIconClass}>
                <div className={iconWrapClass}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full">
                        <path fill="red" d="M501.3 132.8c-5.9-22-23.2-39.4-45.3-45.3c-39.9-10.7-200-10.7-200-10.7s-160.1 0-200 10.7c-22 5.9-39.4 23.2-45.3 45.3C0 172.7 0 256 0 256s0 83.3 10.7 123.2c5.9 22 23.2 39.4 45.3 45.3c39.9 10.7 200 10.7 200 10.7s160.1 0 200-10.7c22-5.9 39.4-23.2 45.3-45.3C512 339.3 512 256 512 256s0-83.3-10.7-123.2"></path>
                        <path fill="#fff" d="m204.8 332.8l133-76.8l-133-76.8z"></path>
                    </svg>
                </div>
                <h1 className={linkStyles}>Youtube</h1>
            </div>

            <div className={socialIconClass}>
                <div className={iconWrapClass}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full">
                        <radialGradient id="SVGZnQWPd8Y" cx={-286.878} cy={685.721} r={255.952} gradientTransform="matrix(0 -1.982 1.8439 0 -1128.4 -17.235)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#fd5"></stop>
                            <stop offset={0.1} stopColor="#fd5"></stop>
                            <stop offset={0.5} stopColor="#ff543e"></stop>
                            <stop offset={1} stopColor="#c837ab"></stop>
                        </radialGradient>
                        <path fill="url(#SVGZnQWPd8Y)" d="M256.1.1C149.2.1 118 .2 111.9.7C89.9 2.5 76.3 6 61.4 13.4C50 19.1 40.9 25.6 32 34.9C15.8 51.8 5.9 72.5 2.4 97.2C.7 109.2.2 111.6.1 172.8V256c0 106.8.1 138 .6 144.1c1.8 21.3 5.1 34.8 12.2 49.5c13.5 28.1 39.4 49.2 69.9 57.1c10.6 2.7 22.2 4.2 37.2 4.9c6.3.3 71 .5 135.6.5s129.3-.1 135.5-.4c17.3-.8 27.4-2.2 38.5-5c30.7-7.9 56.1-28.7 69.9-57.2c7-14.3 10.5-28.3 12.1-48.5c.3-4.4.5-74.7.5-144.9s-.2-140.4-.5-144.8c-1.6-20.6-5.1-34.4-12.3-49c-5.9-12-12.4-20.9-21.9-30c-16.9-16.2-37.6-26-62.3-29.6C403.1 1 400.8.5 339.6.4h-83.5z"></path>
                        <radialGradient id="SVGKw2Qhdar" cx={394.107} cy={480.96} r={255.952} gradientTransform="rotate(78.677 1180.95 631.602)scale(.886 3.6529)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#3771c8"></stop>
                            <stop offset={0.128} stopColor="#3771c8"></stop>
                            <stop offset={1} stopColor="#60f" stopOpacity={0}></stop>
                        </radialGradient>
                        <path fill="url(#SVGKw2Qhdar)" d="M256.1.1C149.2.1 118 .2 111.9.7C89.9 2.5 76.3 6 61.4 13.4C50 19.1 40.9 25.6 32 34.9C15.8 51.8 5.9 72.5 2.4 97.2C.7 109.2.2 111.6.1 172.8V256c0 106.8.1 138 .6 144.1c1.8 21.3 5.1 34.8 12.2 49.5c13.5 28.1 39.4 49.2 69.9 57.1c10.6 2.7 22.2 4.2 37.2 4.9c6.3.3 71 .5 135.6.5s129.3-.1 135.5-.4c17.3-.8 27.4-2.2 38.5-5c30.7-7.9 56.1-28.7 69.9-57.2c7-14.3 10.5-28.3 12.1-48.5c.3-4.4.5-74.7.5-144.9s-.2-140.4-.5-144.8c-1.6-20.6-5.1-34.4-12.3-49c-5.9-12-12.4-20.9-21.9-30c-16.9-16.2-37.6-26-62.3-29.6C403.1 1 400.8.5 339.6.4h-83.5z"></path>
                        <path fill="#fff" d="M256 67c-51.3 0-57.8.2-77.9 1.1s-33.9 4.1-45.9 8.8c-12.4 4.8-23 11.3-33.5 21.8s-17 21.1-21.8 33.5c-4.7 12-7.9 25.8-8.8 45.9c-.9 20.2-1.1 26.6-1.1 77.9s.2 57.8 1.1 77.9s4.1 33.9 8.8 45.9c4.8 12.4 11.3 23 21.8 33.5s21 17 33.5 21.8c12 4.7 25.8 7.9 45.9 8.8c20.2.9 26.6 1.1 77.9 1.1s57.8-.2 77.9-1.1s33.9-4.1 45.9-8.8c12.4-4.8 23-11.3 33.5-21.8s17-21.1 21.8-33.5c4.6-12 7.8-25.8 8.8-45.9c.9-20.2 1.1-26.6 1.1-77.9s-.2-57.8-1.1-77.9s-4.1-33.9-8.8-45.9c-4.8-12.4-11.3-23-21.8-33.5s-21-17-33.5-21.8c-12-4.7-25.8-7.9-45.9-8.8c-20.2-.9-26.6-1.1-77.9-1.1m-17 34.1h17c50.5 0 56.4.2 76.4 1.1c18.4.8 28.4 3.9 35.1 6.5c8.8 3.4 15.1 7.5 21.7 14.1s10.7 12.9 14.1 21.7c2.6 6.7 5.7 16.7 6.5 35.1c.9 19.9 1.1 25.9 1.1 76.4s-.2 56.4-1.1 76.4c-.8 18.4-3.9 28.4-6.5 35.1c-3.4 8.8-7.5 15.1-14.1 21.7s-12.9 10.7-21.7 14.1c-6.7 2.6-16.7 5.7-35.1 6.5c-19.9.9-25.9 1.1-76.4 1.1s-56.5-.2-76.4-1.1c-18.4-.9-28.4-3.9-35.1-6.5c-8.8-3.4-15.1-7.5-21.7-14.1s-10.7-12.9-14.1-21.7c-2.6-6.7-5.7-16.7-6.5-35.1c-.9-19.9-1.1-25.9-1.1-76.4s.2-56.4 1.1-76.4c.8-18.4 3.9-28.4 6.5-35.1c3.4-8.8 7.5-15.1 14.1-21.7s12.9-10.7 21.7-14.1c6.7-2.6 16.7-5.7 35.1-6.5c17.4-.9 24.2-1.1 59.4-1.1m117.9 31.4c-12.5 0-22.7 10.1-22.7 22.7c0 12.5 10.2 22.7 22.7 22.7s22.7-10.2 22.7-22.7s-10.2-22.8-22.7-22.7M256 159c-53.6 0-97.1 43.5-97.1 97.1s43.5 97 97.1 97s97-43.4 97-97s-43.4-97.1-97-97.1m0 34c34.8 0 63 28.2 63 63s-28.2 63-63 63s-63-28.2-63-63s28.2-63 63-63"></path>
                    </svg>
                </div>
                <h2 className={linkStyles}>Instagram</h2>
            </div>

            <div className={socialIconClass}>
                <div className={iconWrapClass}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-full h-full">
                        <g fill="none">
                            <rect width={256} height={256} fill="#fff" rx={60}></rect>
                            <rect width={256} height={256} fill="#1d9bf0" rx={60}></rect>
                            <path fill="#fff" d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"></path>
                        </g>
                    </svg>
                </div>
                <h3 className={linkStyles}>Twitter</h3>
            </div>

            <div className={socialIconClass}>
                <div className={iconWrapClass}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 226" className="w-full h-full">
                        <path fill="#1185fe" d="M55.491 15.172c29.35 22.035 60.917 66.712 72.509 90.686c11.592-23.974 43.159-68.651 72.509-90.686C221.686-.727 256-13.028 256 26.116c0 7.818-4.482 65.674-7.111 75.068c-9.138 32.654-42.436 40.983-72.057 35.942c51.775 8.812 64.946 38 36.501 67.187c-54.021 55.433-77.644-13.908-83.696-31.676c-1.11-3.257-1.63-4.78-1.637-3.485c-.008-1.296-.527.228-1.637 3.485c-6.052 17.768-29.675 87.11-83.696 31.676c-28.445-29.187-15.274-58.375 36.5-67.187c-29.62 5.041-62.918-3.288-72.056-35.942C4.482 91.79 0 33.934 0 26.116C0-13.028 34.314-.727 55.491 15.172"></path>
                    </svg>
                </div>
                <h4 className={linkStyles}>Bluesky</h4>
            </div>
        </div>
    )
}

function Slider({ list }) {
    const [index, setIndex] = useState(0);
    return (
        <div className="relative w-full flex flex-col items-center justify-end gap-2">
            <figure title={list[index].title}
                className="relative w-full h-80 overflow-hidden outline rounded-2xl outline-accent-bg/20">
                <img
                    src={list[index].src}
                    alt={list[index].title}
                    className="w-full h-full rounded-lg object-cover" />
                <div className="flex flex-col gap-2 items-center justify-center
                inset-x-0 left-0 rounded-b-lg border-t-0 absolute bottom-0 bg-page-bg p-2">
                    <span className="text-xs text-surface-muted-fg">{list[index].title}</span>
                    <SliderButtons list={list} index={index} setIndex={setIndex} />
                </div>
            </figure>
        </div>
    )
}

function SliderButtons({ list, index, setIndex }) {
    const change = (direction) => {
        setIndex((index + direction + list.length) % list.length);
    }
    const buttonStyles = `px-2 py-1 rounded hover:text-accent-fg hover:bg-accent-bg hover:outline-primary-bg
                    bg-accent-bg/20 outline outline-accent-bg/30 text-accent-bg`;
    return (
        <div className="flex w-full items-center justify-between">
            <button
                onClick={() => change(-1)}
                className={buttonStyles}>
                &lt;&lt;
            </button>
            <div className="flex gap-2">
                {list.map((item, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full self-center
                            ${index === i ? 'bg-accent-bg' : 'bg-secondary-bg opacity-70'}`}>
                    </div>
                ))}
            </div>
            <button
                onClick={() => change(+1)}
                className={buttonStyles}>
                &gt;&gt;
            </button>
        </div>
    )
}