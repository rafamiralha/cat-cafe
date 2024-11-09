
export default function VideoBackground() {
    return (
        <div>
            <div className="justify-center items-center">

                <video autoPlay loop muted playsInline className="z-[10] absolute h-full w-full">
                    <source src="/videos/cafe-background.mp4" type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                </video>

                <div className="relative p-56 z-20 text-4xl text-my-white">
                    <h1>Bem-vindo ao Meu café Virtual</h1>
                </div>
            </div>
        </div>
    );
}
