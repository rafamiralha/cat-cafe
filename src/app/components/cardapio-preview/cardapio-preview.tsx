import Image from "next/image";
import catAndCoffe from "@/app/assets/cat-and-coffee.png"
import cake from "@/app/assets/bolos.png"
export default function CardapioPreview() {
    return (
        <div>
            <div className="flex justify-center items-center w-full h-80 my-10 ">
                <div className=" flex w-full gap-24 text-6xl  text-my-white p-16">
                    <section className="w-1/3  flex justify-center ">
                    <Image src={catAndCoffe} alt="a cat and a coffee" 
                    className="h-[360px] w-full rounded-3xl"></Image> 
                    <p className=""></p>
                    </section>
                    <section className="w-1/3 flex justify-center">
                    <Image src={cake} alt="a cat and a coffee" className="h-[360px] w-full rounded-3xl"></Image> 
                    </section>
                    <section className="w-1/3 bg-my-white rounded-3xl flex justify-center items-center">
                    <button className="text-my-milk-color">Saiba mais</button>
                    </section>
                </div>
            </div>
        </div>
    );
}