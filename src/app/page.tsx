import Blog from "@/containers/blog";
import Footer from "@/containers/footer";
import Header from "@/containers/header";
import Intro from "@/containers/intro";
import Partners from "@/containers/partners";
import Tools from "@/containers/tools";

export default function Home() {
  return (
    <main className="max-w-[100vw] overflow-x-hidden bg-white">
      <Header />
      <Intro />
      <Tools />
      <Blog />
      <Partners />
      <Footer />
    </main>
  );
}
