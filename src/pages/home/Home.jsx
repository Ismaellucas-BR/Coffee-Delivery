import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";

function Home() {
  return (
    <main className="flex flex-col gap-20">
      <FirstSection />
      <SecondSection />
    </main>
  );
}

export default Home;
