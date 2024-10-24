import Header from "@/components/header";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <main className="flex flex-col items-center">
        <About/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}
