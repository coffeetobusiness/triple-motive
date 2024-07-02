import Image from 'next/image';
import React from 'react';

export default function IndexSectionTestimonials11() {
  return (
    <React.Fragment>
      <>
        <section className="relative bg-body overflow-hidden">
          <div className="py-12 md:pt-24 pb-40 md:pb-52">
            <div className="relative container mx-auto px-4">
              <Image className="absolute top-0 right-0 -mt-8 lg:mr-40 animate-spinStar" src={require('@/assets/casper-assets/testimonials/blink-star.png')} alt />
              {/* <img className="hidden md:block absolute top-0 right-0 -mt-8 lg:mr-40 animate-spinStar" src="casper-assets/testimonials/blink-star.png" alt /> */}
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full lg:w-3/5 xl:w-1/2 px-4 mb-16 lg:mb-0">
                  <div className="max-w-xl">
                    <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-8">WHAT OUR CLIENTS SAY</h2>
                    <p className="text-xl text-gray-500 leading-relaxed">Casper is powered by state-of-the-art artificial intelligence and ensuring natural and meaningful interactions</p>
                  </div>
                </div>
                <div className="w-full lg:w-2/5 xl:w-1/2 px-4">
                  <div className="lg:text-right">
                    <button className="inline-flex w-14 h-14 mr-2.5 items-center justify-center text-gray-300 hover:text-black border border-white hover:border-violet-500 hover:bg-violet-500 rounded-full transition duration-150">
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.08 11.62C6.12759 11.4973 6.19896 11.3851 6.29 11.29L11.29 6.29C11.3832 6.19676 11.4939 6.1228 11.6158 6.07234C11.7376 6.02188 11.8681 5.99591 12 5.99591C12.2663 5.99591 12.5217 6.1017 12.71 6.29C12.8032 6.38324 12.8772 6.49393 12.9277 6.61575C12.9781 6.73758 13.0041 6.86814 13.0041 7C13.0041 7.2663 12.8983 7.5217 12.71 7.71L9.41 11H17C17.2652 11 17.5196 11.1054 17.7071 11.2929C17.8946 11.4804 18 11.7348 18 12C18 12.2652 17.8946 12.5196 17.7071 12.7071C17.5196 12.8946 17.2652 13 17 13H9.41L12.71 16.29C12.8037 16.383 12.8781 16.4936 12.9289 16.6154C12.9797 16.7373 13.0058 16.868 13.0058 17C13.0058 17.132 12.9797 17.2627 12.9289 17.3846C12.8781 17.5064 12.8037 17.617 12.71 17.71C12.617 17.8037 12.5064 17.8781 12.3846 17.9289C12.2627 17.9797 12.132 18.0058 12 18.0058C11.868 18.0058 11.7373 17.9797 11.6154 17.9289C11.4936 17.8781 11.383 17.8037 11.29 17.71L6.29 12.71C6.19896 12.6149 6.12759 12.5028 6.08 12.38C5.97998 12.1365 5.97998 11.8635 6.08 11.62Z" fill="currentColor" />
                      </svg>
                    </button>
                    <button className="inline-flex w-14 h-14 items-center justify-center text-gray-300 hover:text-black border border-white hover:border-violet-500 hover:bg-violet-500 rounded-full transition duration-150">
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.92 11.62C17.8724 11.4973 17.801 11.3851 17.71 11.29L12.71 6.29C12.6168 6.19676 12.5061 6.1228 12.3842 6.07234C12.2624 6.02188 12.1319 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29C11.1968 6.38324 11.1228 6.49393 11.0723 6.61575C11.0219 6.73758 10.9959 6.86814 10.9959 7C10.9959 7.2663 11.1017 7.5217 11.29 7.71L14.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H14.59L11.29 16.29C11.1963 16.383 11.1219 16.4936 11.0711 16.6154C11.0203 16.7373 10.9942 16.868 10.9942 17C10.9942 17.132 11.0203 17.2627 11.0711 17.3846C11.1219 17.5064 11.1963 17.617 11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L17.71 12.71C17.801 12.6149 17.8724 12.5028 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative py-12 h-full lg:h-80">
            <Image className="absolute top-0 left-0 w-full h-full" src={require('@/assets/casper-assets/testimonials/gradient-background.png')} alt />
            {/* <img className="absolute top-0 left-0 w-full h-full" src="casper-assets/testimonials/gradient-background.png" alt /> */}
            <div className="relative container mx-auto px-4">
              <div className="flex flex-wrap -mx-4 -mt-40 lg:-mt-48">
                <div className="w-full lg:w-1/3 px-4">
                  <div className="max-w-md mx-auto mb-8 lg:mb-0 p-6 rounded-3xl overflow-hidden bg-white">
                    <div className="pb-7 mb-3 border-b border-gray-100">
                      <div className="flex mb-3 items-center">
                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z" fill="#FFD33C" />
                        </svg>
                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z" fill="#FFD33C" />
                        </svg>
                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z" fill="#FFD33C" />
                        </svg>
                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z" fill="#FFD33C" />
                        </svg>
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z" fill="#FFD33C" />
                        </svg>
                      </div>
                      <p className="text-lg text-black">“Lisa and her team were passionate and highly engaged in my mission and visibility. I appreciated their commitment to excellence and learned so much about effective messaging and delivery platforms as well. I highly recommend any entrepreneur or organization have a strategy session with TMM to reach their goals.”</p>
                    </div>
                    <div className="flex items-center">
                      <Image className="w-14 h-14 rounded-full" src={require('@/assets/casper-assets/testimonials/avatar-4.png')} alt />
                      {/* <img className="w-14 h-14 rounded-full" src="casper-assets/testimonials/avatar-4.png" alt /> */}
                      <div className="ml-4">
                        <span className="block text-lg font-medium text-black">Kathi McCarty</span>
                        <span className="block text-sm text-gray-600">Founder/Director, Meth Toxins Awareness Alliance</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-4">
                  <div className="max-w-md mx-auto mb-8 lg:mb-0 p-6 rounded-3xl overflow-hidden bg-white">
                    <div className="pb-7 mb-3 border-b border-gray-100">
                      <div className="flex mb-3 items-center">
                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z" fill="#FFD33C" />
                        </svg>
                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z" fill="#FFD33C" />
                        </svg>
                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z" fill="#FFD33C" />
                        </svg>
                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z" fill="#FFD33C" />
                        </svg>
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z" fill="#FFD33C" />
                        </svg>
                      </div>
                      <p className="text-lg text-black">Fox Valley Mutual Inc. utilized Lisa Carter and her team for a complete company overhaul when I increased my company presence in 7 states. They single handedly recreated my logo, my fonts, my email signature, my business card and brochure as well as my website and its presence with SEO. If you are in need of a one stop shop and attention to detail, all for a fair price, look no further!
                        Thank you, Lisa and Robin, for such care to my business! I highly recommend your services! </p>
                    </div>
                    <div className="flex items-center">
                      <Image className="w-14 h-14 rounded-full" src={require('@/assets/casper-assets/testimonials/avatar-3.png')} alt />
                      {/* <img className="w-14 h-14 rounded-full" src="casper-assets/testimonials/avatar-3.png" alt /> */}
                      <div className="ml-4">
                        <span className="block text-lg font-medium text-black">Lisa Marie Schwartz,</span>
                        <span className="block text-sm text-gray-600">CEO of Coca Soft</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-4">
                  <div className="max-w-md mx-auto p-6 rounded-3xl overflow-hidden bg-white">
                    <div className="pb-7 mb-3 border-b border-gray-100">
                      <div className="flex mb-3 items-center">
                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z" fill="#FFD33C" />
                        </svg>
                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z" fill="#FFD33C" />
                        </svg>
                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z" fill="#FFD33C" />
                        </svg>
                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z" fill="#FFD33C" />
                        </svg>
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z" fill="#FFD33C" />
                        </svg>
                      </div>
                      <p className="text-lg text-black">Triple Motive Marketing has created a new name, new logo, business card, brochure, flyer, presentation and built a new website, working patiently at my speed. They improved the functionality with a better template, meaningful content, inviting shopping pages, call to action and video coaching and editing. My website is easier to use, is more professional and I am elated with my website and the feedback I am getting. Thanks Triple Motive Marketing!!
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Image className="w-14 h-14 rounded-full" src={require('@/assets/casper-assets/testimonials/avatar-2.png')} alt />
                      {/* <img className="w-14 h-14 rounded-full" src="casper-assets/testimonials/avatar-2.png" alt /> */}
                      <div className="ml-4">
                        <span className="block text-lg font-medium text-black">Vera Shury</span>
                        <span className="block text-sm text-gray-600">Owner, Liberty Science Coaching</span>
                      </div>
                    </div>
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
