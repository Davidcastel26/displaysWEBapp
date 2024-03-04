'use client'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './CarouselArrowButton'
import { dataCarouselProps } from '@/typescript/interface'
import { useDataCarousel } from '@/hooks/route'
// import { DotButton, useDotButton } from './CarouselDotButton'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  data: dataCarouselProps[]
}

const EmblaCarousel: React.FC<PropType> = ({ 
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
              className="embla__slide embla__class-names hover:bg-slate-100" 
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
        {/* the is the dots into the carousel
         <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default EmblaCarousel
