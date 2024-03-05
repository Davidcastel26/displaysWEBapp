export interface dataCarouselProps {
    id: string;
    name: string;
    desc: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    img: string;
}



export interface ActionsCarousel {
    setId: (value: string) => void;
    setName: (value: string) => void;
    setDesc: (value: string) => void;
    setAddress1: (value: string) => void;
    setAddress2: (value: string) => void;
    setAddress3: (value: string) => void;
    setImg: (value: string) => void;
}