import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import Link from "next/link";

import React from "react";

export const MenuNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>😎</SheetTitle>
            <SheetDescription className="text-2xl font-bold text-left">
                
                <Link href="/stores" >
                    Mi Ruta
                </Link>
            </SheetDescription>
            <SheetDescription className="text-2xl font-bold text-left" >
                <Link href="/history" >
                    Mis Pedidos
                </Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};
