import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import PersonalDetails from "../components/Home/PersonalDetails";
import PersonalGalery from "../components/Home/PersonalGalllery";
import gallery_1 from "../../public/gallery/gallery_1.jpg";
import gallery_2 from "../../public/gallery/gallery_2.jpg";
import gallery_3 from "../../public/gallery/gallery_3.jpg";
import gallery_4 from "../../public/gallery/gallery_4.jpg";
import gallery_5 from "../../public/gallery/gallery_5.jpg";
export default function Home() {
  const personalImage = [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5];
  return (
    <div className="sm:mx-8 md:mx-12 dark:bg-[#212121]">
      <PersonalDetails
        header="Fullstack developer, DevOps, and future CEO/Entrepeneur."
        name="TK"
        detail="I am a fullstack developer, DevOps, and future CEO/Entrepeneur. I am
        currently working on my startup, and learning new technologies
        to build my skillset."
      />
      <PersonalGalery images={personalImage} />
      <main className="flex flex-col items-center justify-center mt-5">
        <HomeCoverSection blogs={allBlogs} />
        <FeaturedPosts blogs={allBlogs} />
        <RecentPosts blogs={allBlogs} />
      </main>
    </div>
  );
}
