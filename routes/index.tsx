import Header from "../islands/Header.tsx";
import { Advantages } from "../components/Advantages.tsx";

import SocialLinks from "../components/SocialLinks.tsx";
import Welcome from "../components/Welcome.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <main class="x-4 mx-auto flex flex-col items-center mb-6">
        <Welcome />
        <Advantages />
        <SocialLinks />
      </main>
      <Footer />
    </>
  );
}
