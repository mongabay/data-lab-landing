import Blog from "@/containers/blog";
import Footer from "@/containers/footer";
import Header from "@/containers/header";
import Intro from "@/containers/intro";
import Partners from "@/containers/partners";
import Tools from "@/containers/tools";

export const metadata = {
  title: "Data Journalism Tools",
  description:
    "A suite of no-code vizualization tools designed for journalists to create stories backed by reliable data sources.",
};

export default async function Home() {
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
