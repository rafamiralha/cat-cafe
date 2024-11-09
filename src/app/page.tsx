import CardapioPreview from "./components/cardapio-preview/cardapio-preview";
import VideoBackground from "./components/video-background/video-background";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <VideoBackground />
      </div>
      <div className="">
        <CardapioPreview/>
      </div>
      
    </div>
  );
}
