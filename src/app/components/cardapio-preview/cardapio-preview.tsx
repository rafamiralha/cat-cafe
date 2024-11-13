import Image from "next/image";
import catAndCoffe from "@/app/assets/cat-and-coffee.png"
import cake from "@/app/assets/bolos.png"

export default function CardapioPreview() {
    return (
        <div>
            <div className="flex justify-center items-center w-full h-80 my-10 ">
                <div className=" flex w-full gap-24 text-6xl  text-my-white p-16">
                    <section className="w-1/3  flex justify-center items-center relative ">
                    <Image src={catAndCoffe} alt="a cat and a coffee" 
                    className="h-[360px] w-full rounded-3xl"></Image> 
                    <button className="absolute inset-0 flex items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-0.5">Cafés</button>
                    </section>
                    <section className="w-1/3 flex justify-center items-center relative">
                    <Image src={cake} alt="a cat and a coffee" className="h-[360px] w-full rounded-3xl"></Image>
                    <button className="absolute inset-0 flex items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-0.5">Bolos</button> 
                    </section>
                    <section className="w-1/3 bg-my-white rounded-3xl flex justify-center items-center flex-col gap-2">
                    <p className="text-my-milk-color">E muito mais...</p>
                    <button className="text-white text-3xl bg-yellow-900 rounded-lg p-5">Cardápio Completo</button>
                    </section>
                </div>
            </div>
        </div>
    );
}