import DateFormatter from '@/app/_components/date-formatter';
import { HeroPost } from '@/app/_components/hero-post';
import { getAllPosts } from '@/lib/api';
import Image from 'next/image';
import React from 'react';

export default function IndexSectionBlog19({ heroPost, morePosts }) {



  return (

    <React.Fragment>
      <>
        <section className="relative py-12 md:py-24 bg-body overflow-hidden">
          <div className="relative container mx-auto px-4">
            <div className="relative max-w-lg lg:max-w-8xl mx-auto">
              <div className="absolute top-0 left-0 -ml-64 -mt-80 w-186 h-186 bg-gradient-to-t from-purple-600 via-darkBlue-900 to-transparent rounded-full filter blur-4xl" />
              <div className="absolute bottom-0 right-0 w-186 h-186 bg-gradient-to-t from-violet-700 via-darkBlue-900 to-transparent rounded-full filter blur-4xl" />
              <div className="relative">
                <div className="max-w-2xl mx-auto mb-18 text-center">
                  <span className="block text-lg text-gray-500 tracking-tight mb-6">See what’s new and different from the incurable creatives at Triple Motive</span>
                  <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium text-white tracking-tight">Our BEST Blogs of All Time!</h2>
                </div>

                <div className="flex flex-wrap -mx-4">
                  <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                    <a className="block" href={`/posts/${heroPost.slug}`}>

                      <img className="block mb-5 w-full"
                        src={heroPost.ogImage.url}
                        alt />
                      <div className="max-w-lg">
                        <span className="block text-base tracking-tight text-gray-200 opacity-70 mb-5">
                          <DateFormatter dateString={heroPost.date} />
                        </span>
                        <h3 className="text-3xl font-medium text-white mb-5">{heroPost.title}</h3>
                        <p className="text-lg tracking-tight text-gray-100 opacity-60">{heroPost.excerpt}</p>
                      </div>
                    </a>
                  </div>
                  <div className="w-full lg:w-1/2 px-4">
                    {
                      morePosts.map((post) => (
                        <a className="flex flex-wrap items-center -mx-4 mb-8" href={`/posts/${post.slug}`}>
                          <div className="w-full sm:w-1/3 px-4 mb-6 sm:mb-0">

                            <img className="block h-40 object-cover rounded-lg" src={post.ogImage.url} alt />
                          </div>
                          <div className="w-full sm:w-2/3 px-4">
                            <div className="max-w-xs">
                              <span className="block text-base tracking-tight text-gray-200 opacity-70 mb-2">
                                <DateFormatter dateString={post.date} />
                              </span>
                              <h3 className="text-xl font-medium text-white tracking-tight leading-relaxed"> {
                                post.title
                              }</h3>
                            </div>
                          </div>
                        </a>
                      ))
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </>
    </React.Fragment>
  );
}

