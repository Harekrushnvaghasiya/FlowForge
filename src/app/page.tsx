import { HomeHeroSection } from "@/components/homePageComponent/homeHeroSection";
import { homeHeroData } from "@/helpers/raw";

export default function Home() {
  return (
    <main>
      <HomeHeroSection data={homeHeroData} />
    </main>
  );
}
