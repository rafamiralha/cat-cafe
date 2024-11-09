import Image from "next/image";
import catIcon from "@/app/assets/cat-icon image.png"

export default function Header() {
   return (
      <header>
         <div className="w-full h-16 bg-my-milk-color text-gray-700 text-lg flex justify-center gap-80 font-bold">
            <div><Image src={catIcon} alt="A cat's Icon" className="mx-3 mt-2 " width={50}
               height={50}></Image></div>
            <ul className="flex flex-row gap-10 justify-center items-center ">
               {"este código abaixo funciona com o passar do mouse"}
               <li className="transition duration-500 ease-in-out transform hover:-translate-y-0.5 ">
                  Home
               </li>
               <li className="transition duration-500 ease-in-out transform hover:-translate-y-0.5 ">
                  Cardapio
               </li>
               <li className="transition duration-500 ease-in-out transform hover:-translate-y-0.5">
                  Café
               </li>
               <li className="transition duration-500 ease-in-out transform hover:-translate-y-0.5">
                  Sobremesa
               </li>
            </ul>
         </div>
      </header>


   );
}
