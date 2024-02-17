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
    <div className=" dark:bg-dark bg-[#fff]">
      <PersonalDetails
        header="CS Student | Reader | Software Engineer"
        name="TK"
        detail="As a passionate full-stack developer, 
        I'm always on the lookout for challenges and learning opportunities. 
        I have a solid foundation in Ruby on Rails and Next.js, 
        and aim to contribute to innovative projects."
      />
      <PersonalGalery images={personalImage} />
      <main className="flex flex-col items-center justify-center mt-12">
        {/* <HomeCoverSection blogs={allBlogs} /> */}
        {/* <FeaturedPosts blogs={allBlogs} /> */}
        {/* <RecentPosts blogs={allBlogs} /> */}
        <pre className="dark:text-white text-black px-4 pb-8">
          {" "}
          Something big is coming...{" "}
        </pre>
      </main>
    </div>
  );
}
