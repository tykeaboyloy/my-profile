import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import PersonalDetails from "../components/Home/PersonalDetails";
import PersonalGalery from "../components/Home/PersonalGalllery";
import images from "./../../public/gallery/index";
export default function Home() {
  const personalImage = images;
  return (
    <div className="sm:mx-8 md:mx-14 border-x-[1px] border-zinc-100 dark:border-zinc-300/20 dark:bg-dark bg-[#fff]">
      <PersonalDetails
        header="Fullstack developer, DevOps, and future CEO/Entrepeneur."
        name="TK"
        detail="As passionate software engineer, 
        I thrive on new challenges and continuous learning. 
        I specialize in Ruby on Rails and Next.js, aiming to contribute to innovative projects."
      />
      <PersonalGalery images={personalImage} />
      <main className="flex flex-col items-center justify-center mt-12">
        {/* <HomeCoverSection blogs={allBlogs} /> */}
        {/* <FeaturedPosts blogs={allBlogs} /> */}
        {/* <RecentPosts blogs={allBlogs} /> */}
        <pre className="dark:text-white text-black px-4 pb-8">
          {" "}
          Something big is coming soon...{" "}
        </pre>
      </main>
    </div>
  );
}
