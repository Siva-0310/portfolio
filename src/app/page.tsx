import Header from "@/components/header";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="m-3">
      <Header/>
      <main className="flex flex-col items-center">
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}
