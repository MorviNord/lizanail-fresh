import Header from "../islands/Header.tsx";
import Geo from "../components/Geo.tsx";
import Welcome from "../components/Welcome.tsx";
import { Advantages } from "../islands/Advantages.tsx";
import Price from "../components/Price.tsx";
import WorksGallery from "../islands/WorksGallery.tsx";

import SocialLinks from "../components/SocialLinks.tsx";

import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <main class="x-4 mx-auto flex flex-col items-center mb-6">
        <Geo />
        <Welcome />
        <Advantages />
        <Price />
        <WorksGallery />
        <SocialLinks />
      </main>
      <Footer />
    </>
  );
}
