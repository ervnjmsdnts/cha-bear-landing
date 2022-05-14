import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import React from 'react'
import 'keen-slider/keen-slider.min.css'

import Drinks from '@/assets/drinks.jpg'
import Food from '@/assets/food.jpg'
import Fries from '@/assets/fries.jpg'
import Tea from '@/assets/tea.jpg'
import Tea2 from '@/assets/tea2.jpg'
import Tea3 from '@/assets/tea3.jpg'

import Section from './Layout/Section'

const animation = { duration: 15000, easing: (t) => t }

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    }
  })

  return (
    <Section>
      <div ref={sliderRef} className='keen-slider'>
        <div className='keen-slider__slide number-slide'>
          <Image src={Drinks} alt='drinks' layout='fill' priority={true} />
        </div>
        <div className='keen-slider__slide number-slide'>
          <Image src={Food} alt='food' layout='fill' priority={true} />
        </div>
        <div className='keen-slider__slide number-slide'>
          <Image src={Fries} alt='fries' layout='fill' priority={true} />
        </div>
        <div className='keen-slider__slide number-slide'>
          <Image src={Tea} alt='tea' layout='fill' priority={true} />
        </div>
        <div className='keen-slider__slide number-slide'>
          <Image src={Tea2} alt='tea2' layout='fill' priority={true} />
        </div>
        <div className='keen-slider__slide number-slide'>
          <Image src={Tea3} alt='tea3' layout='fill' priority={true} />
        </div>
      </div>
    </Section>
  )
}

export default Slider
