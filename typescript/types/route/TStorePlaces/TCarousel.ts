import { EmblaOptionsType } from 'embla-carousel'

import { dataCarouselProps } from '@/typescript/interface'

export type PropTypeCarousel = {
  slides: number[]
  options?: EmblaOptionsType
  data: dataCarouselProps[]
}