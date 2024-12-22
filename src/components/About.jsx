import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'

const About = () => {
    useGSAP(() => {
        const clipAnimate = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start:'center center',
                end:'+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpace: true,
            }
        })
        clipAnimate.to('.mask-clip-path',{
            width:'100vw',
            height:'100vh',
            borderRadius:0
        }
        )
    })

  return (
    <div id='about' className='mid-h-screen w-screen'>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            <h2 className='font-general text-sm uppercase md:text-[10p]'>Welcome to Zeta</h2>
            <div className='mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'>
                Disc<b>o</b>ver the World's <br /> l<b>a</b>rgest shared adventure
            </div>
            <div className='about-subtext'>
                <p>The Game of Games begins-your life, now an epic MMORPG</p>
                <p>Zeta unites everyplayer from countless games and platforms</p>
            </div>
        </div>
        <div className='h-dvh w-screen' id='clip'>
            <div className='mask-clip-path about-image'>
                <img src="img/about.webp" alt="background" 
                className='absolute left-0 top-0 size-full object-cover'
                />
            </div>

        </div>
    </div>
  )
}

export default About