
export default function VideoBackground() {
    return (
        <div>
            <div className="justify-center items-center">

                <video autoPlay loop muted playsInline className="z-[10] absolute h-full w-full">
                    <source src="/videos/cafe-background.mp4" type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                </video>

                <div className=" flex absolute justify-center w-full h-full z-20 text-6xl items-center text-my-white">
                    <h1>Bem-vindo ao Meu café Virtual</h1>
                </div>
            </div>
        </div>
    );
}
