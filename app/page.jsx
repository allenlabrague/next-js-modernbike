import {
  Ebike,
  Feedback,
  Footer,
  Hero,
  KeyFeatures,
  Navbar,
  RideAWeek,
  TechSpecs,
} from "@/container";
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="flex items-center justify-center my-28">
        <Image src="/divider.png" />
      </div>
      <Ebike />
      <div className="flex items-center justify-center my-28">
        <Image src="/divider.png" />
      </div>
      <KeyFeatures />
      <div className="flex items-center justify-center my-28">
        <Image src="/divider.png" />
      </div>
      <RideAWeek />
      <div className="flex items-center justify-center my-28">
        <Image src="/divider.png" />
      </div>
      <Feedback />
      <div className="flex items-center justify-center my-28">
        <Image src="/divider.png" />
      </div>
      <TechSpecs />
      <div className="flex items-center justify-center my-28">
        <Image src="/divider.png" />
      </div>
      <Footer />
    </main>
  );
}
