import Image from "next/image";
import catIcon from "@/app/assets/cat-icon image.png"

export default function Header() {
   return (
      <header>
         <div className="w-full h-16 bg-my-milk-color text-gray-700 text-lg flex justify-center gap-80 font-bold">
            <div><Image src={catIcon} alt="A cat's Icon" className="mx-3 mt-2 " width={50}
               height={50}></Image></div>
            <ul className="flex flex-row gap-10 justify-center items-center ">
               <li className="hover:underline">
                  Home
               </li>
               <li className="hover:underline">
                  Cardapio
               </li>
               <li className="hover:underline">
                  Café
               </li>
               <li className="hover:underline">
                  Sobremesa
               </li>
            </ul>
         </div>
      </header>


   );
}
