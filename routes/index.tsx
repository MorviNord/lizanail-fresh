import Header from "../islands/Header.tsx";
import { Interests } from "../components/Interests.tsx";

import SocialLinks from "../components/SocialLinks.tsx";
import Welcome from "../components/Welcome.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <main class="x-4 mx-auto flex flex-col items-center mb-8">
        <Welcome />
        <Interests />
        <SocialLinks />
      </main>
      <Footer />
    </>
  );
}
