import Image from 'next/image';
import React from 'react';

export default function IndexSectionCta8() {
  return (
    <React.Fragment>
      <>
        <section className="relative py-12 md:py-24 bg-body overflow-hidden">
          <div className="absolute top-0 left-0 ml-28 mt-10 w-148 h-148 bg-gradient-to-t from-purple-700 to-darkBlue-900 rounded-full filter blur-4xl" />
          <div className="absolute top-0 right-0 mr-52 mt-32 w-148 h-148 bg-gradient-to-t from-violet-900 via-darkBlue-900 rounded-full filter blur-4xl" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-sm md:max-w-xl mx-auto text-center mb-18">
              <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl font-medium text-white tracking-tight mb-8">Expertise Include</h2>
              <p className="text-lg text-gray-500">Our expertise</p>
            </div>
            <div className="max-w-xl lg:max-w-none mx-auto">
              <div className="flex flex-wrap lg:flex-nowrap justify-center -mx-2">
                <div className="flex-shrink-0 flex mx-2 mb-8 items-center justify-center w-62 h-27 px-6 py-4 text-center border-2 border-gray-700 rounded-full">
                  <span className="text-xl sm:text-2xl font-medium text-white">Innovative &amp; Superior Digital Marketing</span>
                </div>
                <div className="flex-shrink-0 relative block mx-2 mb-8 w-27 h-27 rounded-full overflow-hidden">
                  <Image className="absolute top-0 left-0 w-full h-full object-cover" src={require('@/assets/casper-assets/cta/circle-bg-shape.png')} alt />

                  {/* <img className="absolute top-0 left-0 w-full h-full object-cover" src="casper-assets/cta/circle-bg-shape.png" alt /> */}
                </div>
                <div className="flex-shrink-0 relative block mx-2 mb-8 w-74 h-27 rounded-full overflow-hidden">
                  <Image className="absolute top-0 left-0 w-full h-full object-cover" src={require('@/assets/casper-assets/cta/shape-photo-md-2.png')} alt />
                </div>
                <div className="flex-shrink-0 flex mx-2 mb-8 items-center justify-center w-62 h-27 px-6 py-4 text-center bg-white rounded-full">
                  <span className="text-xl sm:text-2xl font-medium text-black">Digital Advertisement</span>
                </div>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap justify-center -mx-2">
                <div className="flex-shrink-0 relative block mx-2 mb-8 w-52 h-27 rounded-full overflow-hidden">
                  <Image className="absolute top-0 left-0 w-full h-full object-cover" src={require('@/assets/casper-assets/cta/shape-photo-sm.png')} alt />

                  <img className="absolute top-0 left-0 w-full h-full object-cover" src="casper-assets/cta/shape-photo-sm.png" alt />
                </div>
                <div className="flex-shrink-0 flex mx-2 mb-8 items-center justify-center w-62 h-27 px-6 py-4 text-center border-2 border-gray-700 rounded-full">
                  <span className="text-xl sm:text-2xl font-medium text-white">Brand Development</span>
                </div>
                <div className="flex-shrink-0 flex mx-2 mb-8 items-center justify-center w-62 h-27 px-6 py-4 text-center border-2 border-gray-700 rounded-full">
                  <span className="text-xl sm:text-2xl font-medium text-white">Marketing Solutions</span>
                </div>
                <div className="flex-shrink-0 relative block mx-2 mb-8 w-74 h-27 rounded-full overflow-hidden">

                  <Image className="absolute top-0 left-0 w-full h-full object-cover" src={require('@/assets/casper-assets/cta/shape-photo-md.png')} alt />
                </div>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap justify-center -mx-2">
                <div className="flex-shrink-0 relative block mx-2 mb-8 w-27 h-27 rounded-full overflow-hidden">
                  <Image className="absolute top-0 left-0 w-full h-full object-cover" src={require('@/assets/casper-assets/cta/circle-bg-shape.png')} alt />
                  {/* <img className="absolute top-0 left-0 w-full h-full object-cover" src="casper-assets/cta/circle-bg-shape.png" alt /> */}
                </div>
                <div className="flex-shrink-0 flex mx-2 mb-8 items-center justify-center w-62 h-27 px-6 py-4 text-center border-2 border-gray-700 rounded-full">
                  <span className="text-xl sm:text-2xl font-medium text-white">Software Development</span>
                </div>
                <div className="flex-shrink-0 relative block mx-2 mb-8 w-74 h-27 rounded-full overflow-hidden">
                  <Image className="absolute top-0 left-0 w-full h-full object-cover" src={require('@/assets/casper-assets/cta/shape-photo-md-2.png')} alt />
                  {/* <img className="absolute top-0 left-0 w-full h-full object-cover" src="casper-assets/cta/shape-photo-md-2.png" alt /> */}
                </div>
              </div>
            </div>
          </div>
        </section>


      </>
    </React.Fragment>
  );
}

