import Header from "@/components/header";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="m-3">
      <Header/>
      <main className="flex flex-col items-center">
        <Contact/>
      </main>
    </div>
  );
}
