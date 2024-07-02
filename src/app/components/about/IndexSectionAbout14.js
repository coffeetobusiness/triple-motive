import Image from 'next/image';
import React from 'react';

export default function IndexSectionAbout14() {
  return (
    <React.Fragment>
      <>
        <section className="relative py-12 md:py-24 lg:py-32 bg-body overflow-hidden">
          <Image className="absolute top-0 left-0 -ml-64 -mt-80 w-186 h-186 bg-gradient-to-t from-purple-600 via-darkBlue-900 to-transparent rounded-full filter blur-4xl" src={require('@/assets/casper-assets/about/planet-lg-half.png')} alt />
          {/* <img className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1/3" src="casper-assets/about/planet-lg-half.png" alt /> */}

          <Image className="absolute top-0 right-0 h-full z-10" src={require('@/assets/casper-assets/about/double-lines-lg-right.svg')} alt />
          {/* <img className="absolute top-0 right-0 h-full z-10" src="casper-assets/about/double-lines-lg-right.svg" alt /> */}
          <div className="relative container mx-auto px-4">
            <div className="absolute top-0 right-0 -mt-128 mr-40 w-186 h-186 bg-gradient-to-t from-violet-900 via-darkBlue-900 to-transparent rounded-full filter blur-4xl" />
            <div className="relative max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium text-white tracking-tight mb-4">our reason for being</h2>
              <p className="text-gray-400 leading-relaxed tracking-tight mb-4 text-6xl">We empower brands and unlock new opportunities for brand visibility, growth, and financial success.</p>
              <a className="inline-flex items-center text-sm font-medium text-violet-500 hover:text-white uppercase" href="#">
                <span className="mr-2">GET TO KNOW US</span>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.92 6.62C17.8185 6.37565 17.6243 6.18147 17.38 6.08C17.2598 6.02876 17.1307 6.00158 17 6H7C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7C6 7.26522 6.10536 7.51957 6.29289 7.70711C6.48043 7.89464 6.73478 8 7 8H14.59L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L16 9.41V17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V7C17.9984 6.86932 17.9712 6.74022 17.92 6.62Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </section>


      </>
    </React.Fragment>
  );
}

