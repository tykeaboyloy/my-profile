import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import PersonalDetails from "../components/Home/PersonalDetails";

export default function Home() {
  return (
    <div>
      <PersonalDetails
        header="Fullstack developer, DevOps, and future CEO/Entrepeneur."
        name="TK"
        detail="I am a fullstack developer, DevOps, and future CEO/Entrepeneur. I am
        currently working on my startup, and learning new technologies
        to build my skillset."
      />
      <main className="flex flex-col items-center justify-center">
        <HomeCoverSection blogs={allBlogs} />
        <FeaturedPosts blogs={allBlogs} />
        <RecentPosts blogs={allBlogs} />
      </main>
    </div>
  );
}
