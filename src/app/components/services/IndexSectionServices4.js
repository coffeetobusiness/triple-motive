import React from 'react';

export default function IndexSectionServices4() {
  return (
    <React.Fragment>
      <>
        <section className="relative py-12 md:py-24 bg-body overflow-hidden">
          <div className="relative container mx-auto px-4">
            <div className="absolute bottom-0 right-0 mr-20 w-186 h-186 bg-gradient-to-t from-violet-900 via-darkBlue-900 to-transparent rounded-full filter blur-4xl" />
            <div className="max-w-md mx-auto lg:max-w-none relative">
              <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium text-white tracking-tight mb-6">We Serve YOU. Period!</h2>
              <p className="text-gray-500 tracking-tight mb-16 text-3xl">We serve SMBs, entrepreneurs, solopreneurs, and small to mid-sized ​nonprofits looking for a kickstart or a revamp to their brand.
              </p>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
                  <div>
                    <img className="block mb-6" src="/assets/casper-assets/services/circle-icon1.png" alt />
                    <h4 className="font-heading text-3xl font-medium text-white">I’m an Overworked Solopreneur.</h4>
                    <div className="h-1 bg-white bg-opacity-10 my-6 rounded-md" />
                    <p className="max-w-sm text-xl tracking-tight leading-relaxed text-violet-50">From answering questions to providing recommendations, our AI assistant will engage your visitors effortlessly.</p>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
                  <div>
                    <img className="block mb-6" src="/assets/casper-assets/services/circle-icon3.png" alt />
                    <h4 className="font-heading text-3xl font-medium text-white">Get Brand Visibility</h4>
                    <div className="h-1 bg-white bg-opacity-10 my-6 rounded-md" />
                    <p className="max-w-xs text-xl tracking-tight leading-relaxed text-violet-50">By understanding your visitors' needs, our chat assistant creates a unique experience</p>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-4">
                  <div>
                    <img className="block mb-6" src="/assets/casper-assets/services/circle-icon2.png" alt />
                    <h4 className="font-heading text-3xl font-medium text-white">Achieve Financial Success</h4>
                    <div className="h-1 bg-white bg-opacity-10 my-6 rounded-md" />
                    <p className="max-w-xs text-xl tracking-tight leading-relaxed text-violet-50">Say goodbye to static web pages and hello to an interactive, conversational platform</p>
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

