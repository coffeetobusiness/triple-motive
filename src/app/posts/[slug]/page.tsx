import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import Avatar from "@/app/_components/avatar";
import IndexSectionHeaders1 from "@/app/components/headers/IndexSectionHeaders1";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      {/* <Alert preview={post.preview} /> */}
      {/* <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container> */}
      <>

        <nav className="relative z-10 py-7 bg-body overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-between">
              <a className="inline-block" href="#">
                <img className="h-20" src="https://static.shuffle.dev/uploads/files/85/85a4056d67c5abb138ea7d1734218ada4fccb2eb/420ba945daf4071bca906ca5211f2736.png" alt={''} />
              </a>
              <div className="flex items-center justify-end">
                <div className="hidden lg:block mr-10">
                  <a className="inline-flex py-2 px-4 mr-4 items-center justify-center text-sm font-medium uppercase text-white hover:text-violet-500" href="#pricing">Pricing</a><a className="inline-flex h-11 py-2 px-4 items-center justify-center text-sm font-medium uppercase text-black hover:text-white bg-violet-500 hover:bg-violet-600 transition duration-200 rounded-full" href="#">Get free consultation</a>
                </div>
                <button className="navbar-burger text-white hover:text-violet-500">
                  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 16H29" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 8H29" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 24L29 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <section className="relative py-12 md:py-24 bg-body overflow-hidden">
          <div className="relative container mx-auto px-4">
            <div className="absolute top-0 left-0 -ml-32 -mt-96 w-186 h-186 bg-gradient-to-t from-purple-600 via-darkBlue-900 to-transparent rounded-full filter blur-4xl" />
            <img className="hidden md:block absolute top-0 right-0 animate-spinStar" src="casper-assets/content/blink-star.png" alt={''} />
            <div className="relative max-w-4xl mx-auto">
              <a
                className="block text-sm font-medium text-sky-900 mb-4"
                href="/"
              >

                <span >Back </span>
              </a>
              <h2 className="font-heading text-xl xs:text-xl sm:text-3xl xl:text-5xl font-medium text-white tracking-tight mb-10">{post.title}</h2>
              <img className="block w-full mb-10" src={
                post.ogImage.url

              } alt={''} />
              <div className="hidden md:block md:mb-12">
                <Avatar name={post.author.name} picture={post.author.picture} />
              </div>

              {/* <h3 className="text-xl text-gray-50 font-medium mb-8">Mi quisque ultrices hendrerit nec aliquet integer mollis faucibus morbi.</h3>
              <p className="text-lg tracking-tight text-gray-200 mb-4">Pellentesque ipsum nulla in eget interdum a. Neque pellentesque pulvinar mauris pulvinar diam. Turpis aliquet pellentesque velit vitae nisi sed morbi ultrices sed. Egestas interdum elit integer nec pharetra eget blandit dolor purus. A sed nisi congue morbi fermentum blandit. Turpis pretium dignissim risus ultrices purus et amet netus nibh.</p>
              <p className="text-lg tracking-tight text-gray-200 mb-10">Vestibulum est ante in congue a fusce nunc. At tristique donec nisi viverra vulputate blandit orci at lectus. Morbi cras urna congue ornare. Mi magna vestibulum tortor id nec tortor non. Enim orci lorem egestas sed morbi dui mauris etiam nulla. Euismod cursus viverra ut ac eu sit quam amet tempor. Id in suspendisse nam sit vitae ullamcorper mollis et ut.</p> */}
              <PostBody content={content} />
            </div>
          </div>
        </section>


      </>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
