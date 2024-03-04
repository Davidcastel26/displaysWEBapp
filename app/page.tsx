'use client'

import { NavbarMain } from '@/components/system';
// import {Suspense,lazy} from "react";
import Order from './(orders)/order/page';

// const Nav = lazy(() => {
//   console.log(import('next1/nav'));
//   return import('next1/nav');
// });

// const Footer = lazy(() => import('main/footer'));
// import Footer from 'main/footer';
// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <NavbarMain />
      {/* <Suspense fallback={'loading'}> */}
        {/* <Nav> */}
      <Order/>
        {/* </Nav> */}
      {/* </Suspense> */}
      {/* <Footer /> */}
    </>
  )
}
