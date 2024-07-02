import Image from 'next/image';
import React from 'react';

export default function IndexSectionBlog19() {
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
                    <a className="block" href="#">

                      <Image className="block mb-5 w-full" src={require('@/assets/casper-assets/blog/blog-5-article1.png')} alt />
                      <div className="max-w-lg">
                        <span className="block text-base tracking-tight text-gray-200 opacity-70 mb-5">Jul 20, 2022</span>
                        <h3 className="text-3xl font-medium text-white mb-5">Consectures Dummy Content Velit officia consequat duis enim velit</h3>
                        <p className="text-lg tracking-tight text-gray-100 opacity-60">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit xercitation.</p>
                      </div>
                    </a>
                  </div>
                  <div className="w-full lg:w-1/2 px-4">
                    <a className="flex flex-wrap items-center -mx-4 mb-8" href="#">
                      <div className="w-full sm:w-1/3 px-4 mb-6 sm:mb-0">
                        <Image className="block h-40 object-cover rounded-lg" src={require('@/assets/casper-assets/blog/blog-5-article2.png')} alt />
                        {/* <img className="block h-40 object-cover rounded-lg" src="casper-assets/blog/blog-5-article2.png" alt /> */}
                      </div>
                      <div className="w-full sm:w-2/3 px-4">
                        <div className="max-w-xs">
                          <span className="block text-base tracking-tight text-gray-200 opacity-70 mb-2">Jul 20, 2022</span>
                          <h3 className="text-xl font-medium text-white tracking-tight leading-relaxed">Consectures Content Velitpato officia consequat duis enim velit mollit</h3>
                        </div>
                      </div>
                    </a>
                    <a className="flex flex-wrap items-center -mx-4 mb-8" href="#">
                      <div className="w-full sm:w-1/3 px-4 mb-6 sm:mb-0">

                        <Image className="block h-40 object-cover rounded-lg" src={require("@/assets/casper-assets/blog/blog-5-article3.png")} alt />
                      </div>
                      <div className="w-full sm:w-2/3 px-4">
                        <div className="max-w-xs">
                          <span className="block text-base tracking-tight text-gray-200 opacity-70 mb-2">Jul 20, 2022</span>
                          <h3 className="text-xl font-medium text-white tracking-tight leading-relaxed">Consectures Content Velitpato officia consequat duis enim velit mollit</h3>
                        </div>
                      </div>
                    </a>
                    <a className="flex flex-wrap items-center -mx-4" href="#">
                      <div className="w-full sm:w-1/3 px-4 mb-6 sm:mb-0">
                        <Image className="block h-40 object-cover rounded-lg" src={require('@/assets/casper-assets/blog/blog-5-article4.png')} alt />
                        {/* <img className="block h-40 object-cover rounded-lg" src="casper-assets/blog/blog-5-article4.png" alt /> */}
                      </div>
                      <div className="w-full sm:w-2/3 px-4">
                        <div className="max-w-xs">
                          <span className="block text-base tracking-tight text-gray-200 opacity-70 mb-2">Jul 20, 2022</span>
                          <h3 className="text-xl font-medium text-white tracking-tight leading-relaxed">Consectures Content Velitpato officia consequat duis enim velit mollit</h3>
                        </div>
                      </div>
                    </a>
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

