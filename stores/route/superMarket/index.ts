import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { firebaseStorage } from "../storages/firebase-session.storage";
import { logger } from "../middlewares/logger.middleware";
import { ActionsCarousel, dataCarouselProps } from "@/typescript/interface";

type MarketPalceStore = dataCarouselProps & ActionsCarousel;

const storeApi: StateCreator<MarketPalceStore, [["zustand/devtools", never]]> = (set) => ({
    id: '',
    address: '',
    address1:'',
    img: '',
    setId: (value: string) => set(({id:value}), false, 'setId'),
    setAddress: (value: string) => set(({address:value}), false, 'setAddress'),
    setAddress1: (value: string) => set(({address1: value}),  false, 'setAddress1' ),
    setImg: (value: string) => set(({img: value}),  false, 'setImg' ),
})


export const useMarketPalceStore = create<MarketPalceStore>()(
    logger(
        devtools(
            persist(
                storeApi
              ,{ 
                  name: 'marketplace-storage',
                  storage: firebaseStorage
              })
        )
    )
);
