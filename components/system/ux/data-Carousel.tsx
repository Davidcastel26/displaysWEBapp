'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './CarouselArrowButton'
import { DotButton, useDotButton } from './CarouselDotButton'
import Image from 'next/image'

interface dataProps {
  id: number
  address: string
  address1: string
  img: string
}

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  data: dataProps[]
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, data } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {
           data.map((place: dataProps) => (
            <div 
              className="embla__slide embla__class-names" 
              key={place?.id}
            >
              <img
                className="embla__slide__img"
                src={place?.img}
                alt={ place?.address }
              />
             <div className="pt-[-1rem] flex flex-col text-center">
                <h2 className="text-lg font-semibold">
                  { place?.address}
                </h2>
                <p className="font-medium text-base">
                  { place?.address1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
