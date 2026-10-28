import { HomeHeroSection } from "@/components/homePageComponent/homeHeroSection";
import SignInPage from "@/components/SignInPage";
import { homeHeroData, signInData } from "@/helpers/raw";

export default function Home() {
  return (
    <main>
      <HomeHeroSection data={homeHeroData} />
      <SignInPage data={signInData} />
    </main>
  );
}
