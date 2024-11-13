import Image from "next/image";
import catIcon from "@/app/assets/cat-icon image.png"
import Link from "next/link";

export default function Header() {
   return (
      <header>
         <div className="w-full h-36 bg-my-milk-color text-gray-700 text-2xl flex justify-center gap-80 font-bold ">
            <div className="flex justify-center items-center"><Image src={catIcon} alt="A cat's Icon" className="mx-3 mt-2 " width={50}
               height={50}></Image>
            </div>
            <ul className="flex flex-row gap-10 justify-center items-center ">
               {/*"este código abaixo funciona com o passar do mouse"*/}
               <li className="transition duration-500 ease-in-out transform hover:-translate-y-0.5 ">
                  <Link href="/">
                     Home
                  </Link>
               </li>
               <li className="transition duration-500 ease-in-out transform hover:-translate-y-0.5 ">
                  <Link href="/cardapio">
                     Cardapio
                  </Link>
               </li>
               <li className="transition duration-500 ease-in-out transform hover:-translate-y-0.5">
                  <button>Bebidas</button>
               </li>
               <li className="transition duration-500 ease-in-out transform hover:-translate-y-0.5">
                  <button>Sobremesas</button>
               </li>
            </ul>
         </div>
      </header>


   );
}
