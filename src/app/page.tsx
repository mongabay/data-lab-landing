import Blog from "@/containers/blog";
import Footer from "@/containers/footer";
import Header from "@/containers/header";
import Intro from "@/containers/intro";
import Partners from "@/containers/partners";
import Tools from "@/containers/tools";

import { getData } from "@/utils";

export const metadata = {
  title: "Charts Tool",
  description:
    "A suite of tools for journalists to deliver data-backed environmental stories.",
};

export default async function Home() {
  const posts = await getData();

  return (
    <main className="max-w-[100vw] overflow-x-hidden bg-white">
      <Header />
      <Intro />
      <Tools />
      <Blog posts={posts} />
      <Partners />
      <Footer />
    </main>
  );
}
