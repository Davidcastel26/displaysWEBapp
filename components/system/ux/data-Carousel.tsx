'use client'

import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import { useDataCarousel } from '@/hooks/route'

import { dataCarouselProps } from '@/typescript/interface'
import { PropTypeCarousel  } from '@/typescript/types'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './CarouselArrowButton'

// import { DotButton, useDotButton } from './CarouselDotButton'

const EmblaCarousel: React.FC<PropTypeCarousel> = ({ 
  slides, 
  options, 
  data 
}) => {

  
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])
  // const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { handleClickStore } = useDataCarousel()

  return (
    <div className="embla">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {
           data.map((place: dataCarouselProps) => (
            <div 
              onClick={ ()=> handleClickStore(place) }
              className="embla__slide embla__class-name" 
              key={place?.id}
            >
              <img
                className="embla__slide__img"
                src={place?.img}
                alt={ place?.addressLine2 + place?.desc}
              />
             <div className="pt-[-1rem] flex flex-col text-center">
                <h2 className="text-lg font-semibold">
                  { place?.name}
                </h2>
                <p className="font-medium text-base">
                  { place?.addressLine1}
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
