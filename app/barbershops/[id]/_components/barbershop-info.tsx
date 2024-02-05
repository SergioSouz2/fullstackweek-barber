"use client";

import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
   barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
   const router = useRouter();

   const hendleBackClick = () => {
      router.back();
   };

   return (
      <div>
         <div className="h-[250px] w-full relative">
            <Button
               size="icon"
               variant="outline"
               className="z-50 absolute top-4 left-4"
               onClick={hendleBackClick}
            >
               <ChevronLeftIcon />
            </Button>

            <Button
               size="icon"
               variant="outline"
               className="z-50 absolute top-4 right-4"
            >
               <MenuIcon />
            </Button>

            <Image
               alt={barbershop.name}
               src={barbershop.imageUrl}
               fill
               style={{
                  objectFit: "cover",
               }}
               className="opacity-75"
            />
         </div>

         <div className="px-5 py-3 pb-6 border-b border-solid border-secondary">
            <h1 className="text-xl font-bold">{barbershop.name}</h1>
            <div className="flex items-center gap-1 mt-2">
               <MapPinIcon size={18} className="text-primary" />
               <p className="text-sm ">{barbershop.address}</p>
            </div>
            <div className="flex items-center gap-1 mt-2">
               <StarIcon size={18} className="text-primary" />
               <p className="text-sm ">5,0 (899 avaliações)</p>
            </div>
         </div>
      </div>
   );
};

export default BarbershopInfo;
