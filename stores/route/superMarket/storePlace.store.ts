import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
// import { firebaseStorage } from "../storages/firebase-session.storage";
import { logger } from "@/middlewares/looger.middleware"
import { ActionsCarousel, dataCarouselProps } from "@/typescript/interface";

type MarketPalceStore = dataCarouselProps & ActionsCarousel;

const storeApi: StateCreator<MarketPalceStore, [["zustand/devtools", never]]> = (set) => ({
    id: '',
    name: '',
    desc: '',
    addressLine1: '',
    addressLine2:'',
    addressLine3:'',
    img: '',

    setId: (value: string) => set(({id:value}), false, 'setId'),
    setName: ( value: string) => set(({ name: value}), false, 'setName'),
    setDesc: ( value: string) => set(({ desc: value}), false, 'setDesc'),
    setAddress1: (value: string) => set(({addressLine1:value}), false, 'setAddress1'),
    setAddress2: (value: string) => set(({addressLine2: value}),  false, 'setAddress2' ),
    setAddress3: (value: string) => set(({addressLine3: value}),  false, 'setAddress3' ),
    setImg: (value: string) => set(({img: value}),  false, 'setImg' ),
})


export const useMarketPalceStore = create<MarketPalceStore>()(
    logger(
        devtools(
            persist(
                storeApi
              ,{ 
                  name: 'marketplace-storage',
                //   storage: firebaseStorage
              })
        )
    )
);
