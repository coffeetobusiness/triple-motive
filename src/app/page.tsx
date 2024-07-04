import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import IndexPage from "@/app/pages/Index";
import IndexSectionHeaders1 from "./components/headers/IndexSectionHeaders1";
import IndexSectionCta18 from "./components/cta/IndexSectionCta18";
import IndexSectionFeatures2 from "./components/features/IndexSectionFeatures2";
import IndexSectionServices4 from "./components/services/IndexSectionServices4";
import IndexSectionAbout14 from "./components/about/IndexSectionAbout14";
import IndexSectionPortfolio5 from "./components/portfolio/IndexSectionPortfolio5";
import IndexSectionCta6 from "./components/cta/IndexSectionCta6";
import IndexSectionCta8 from "./components/cta/IndexSectionCta8";
import IndexSectionTestimonials11 from "./components/testimonials/IndexSectionTestimonials11";
import IndexSectionBlog19 from "./components/blog/IndexSectionBlog19";
import IndexSectionTeam12 from "./components/team/IndexSectionTeam12";
import IndexSectionCta20 from "./components/cta/IndexSectionCta20";
import IndexSectionFooter13 from "./components/footer/IndexSectionFooter13";
export default function Index() {
  const allPosts = getAllPosts();
  console.log(allPosts);

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    // <main>
    //   <Container>
    //     <Intro />
    //     <HeroPost
    //       title={heroPost.title}
    //       coverImage={heroPost.coverImage}
    //       date={heroPost.date}
    //       author={heroPost.author}
    //       slug={heroPost.slug}
    //       excerpt={heroPost.excerpt}
    //     />
    //     {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    //   </Container>
    // </main>
    <>

      <IndexSectionHeaders1 />
      <IndexSectionCta18 />
      <IndexSectionFeatures2 />
      <IndexSectionServices4 />
      <IndexSectionAbout14 />
      <IndexSectionPortfolio5 />
      <IndexSectionCta6 />
      <IndexSectionCta8 />
      <IndexSectionTestimonials11 />
      <IndexSectionTeam12 />
      <IndexSectionBlog19
        heroPost={heroPost}
        morePosts={morePosts}
      />
      <IndexSectionCta20 />
      <IndexSectionFooter13 />
    </>

  );
}
