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
        detail="I am a fullstack developer, DevOps, and future CEO/Entrepeneur. I am
        currently working on my startup, and learning new technologies
        to build my skillset."
      />
      <PersonalGalery images={personalImage} />
      <main className="flex flex-col items-center justify-center mt-12">
        <HomeCoverSection blogs={allBlogs} />
        <FeaturedPosts blogs={allBlogs} />
        <RecentPosts blogs={allBlogs} />
      </main>
    </div>
  );
}
