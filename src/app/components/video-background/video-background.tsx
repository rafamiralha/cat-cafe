export default function VideoBackground() {
    return (
        <div>
            <div className="justify-center items-center h-screen ">

                <video autoPlay loop muted playsInline className="z-[-1]  absolute h-full w-full">
                    <source src="/videos/cafe-background.mp4" type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                </video>

                <div className=" flex relative z-20 justify-center w-full h-full text-6xl items-center text-my-white">
                    <h1>Bem-vindo ao Meu café Virtual</h1>
                </div>
            </div>
        </div>
    );
}
