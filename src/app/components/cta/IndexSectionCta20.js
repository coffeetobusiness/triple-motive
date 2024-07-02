import Image from 'next/image';
import React from 'react';

export default function IndexSectionCta20() {
  return (
    <React.Fragment>
      <>
        <section className="relative py-12 md:py-24 bg-body overflow-hidden">
          <img className="hidden sm:block lg:hidden absolute top-0 right-0 mt-2 mr-6 md:mr-12 w-40 md:w-auto" src="casper-assets/cta/robo-bubble.png" alt />
          <div className="relative container mx-auto px-4">
            <div className="max-w-lg lg:max-w-8xl mx-auto">
              <div className="max-w-lg mb-6">

                <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl font-medium text-white tracking-tight">The Revolutionary “YES TEST” is here!!</h2>
              </div>
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                  <div className="max-w-sm">
                    <Image className="block w-full" src={require('@/assets/casper-assets/cta/robot-image.png')} alt />
                    {/* <img className="block w-full" src="casper-assets/cta/robot-image.png" alt /> */}
                  </div>
                </div>
                <div className="relative w-full lg:w-1/2 px-4">
                  <div className="absolute top-1/2 right-0 h-160 w-160 transform -translate-y-1/2 bg-gradient-to-t from-violet-900 via-darkBlue-900 rounded-full filter blur-4xl" />

                  <Image className="hidden lg:block absolute top-0 right-0 -mt-60 mr-12" src={require('@/assets/casper-assets/cta/robo-bubble.png')} alt />
                  {/* <img className="hidden lg:block absolute top-0 right-0 -mt-60 mr-12" src="casper-assets/cta/robo-bubble.png" alt /> */}
                  <div className="relative max-w-lg pr-6">
                    <h4 className="text-2xl text-white font-medium mb-8">It is our FREE GIFT to help you market and sell to the emotions of your audience.</h4>
                    <p className="text-xl text-gray-500 tracking-tight leading-relaxed mb-8">Casper provide instant support, and boost conversions like never before. Join thousands of satisfied customers who have already elevated their online presence with our AI chat assistant.</p>
                    <a className="group inline-flex w-full md:w-auto h-14 px-7 items-center justify-center text-base font-medium text-black hover:text-white bg-violet-500 hover:bg-violet-600 transition duration-200 rounded-full" href="#">
                      <span className="mr-2">CONTACT US</span>
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.44 13C19.22 13 18.99 12.93 18.77 12.88C18.3245 12.7818 17.8866 12.6515 17.46 12.49C16.9961 12.3212 16.4861 12.33 16.0283 12.5146C15.5704 12.6992 15.1971 13.0466 14.98 13.49L14.76 13.94C13.786 13.3982 12.891 12.7252 12.1 11.94C11.3147 11.149 10.6418 10.254 10.1 9.28L10.52 9.00001C10.9633 8.78292 11.3108 8.40954 11.4954 7.9517C11.68 7.49386 11.6888 6.98392 11.52 6.52001C11.3612 6.09243 11.2309 5.6548 11.13 5.21001C11.08 4.99001 11.04 4.76001 11.01 4.53001C10.8885 3.82563 10.5196 3.18775 9.9696 2.73124C9.4196 2.27474 8.72467 2.02961 8.00998 2.04001H5.00998C4.57901 2.03596 4.15223 2.12482 3.75869 2.30054C3.36515 2.47625 3.01409 2.7347 2.72941 3.05829C2.44473 3.38187 2.23311 3.763 2.10897 4.17572C1.98482 4.58844 1.95106 5.02306 2.00998 5.45001C2.54272 9.63939 4.45601 13.5319 7.44763 16.5126C10.4393 19.4934 14.3387 21.3925 18.53 21.91H18.91C19.6474 21.9111 20.3594 21.6405 20.91 21.15C21.2263 20.867 21.4791 20.5202 21.6514 20.1323C21.8238 19.7445 21.9119 19.3244 21.91 18.9V15.9C21.8977 15.2054 21.6448 14.5366 21.1943 14.0077C20.7439 13.4788 20.1238 13.1226 19.44 13ZM19.94 19C19.9398 19.142 19.9094 19.2823 19.8508 19.4116C19.7921 19.5409 19.7066 19.6563 19.6 19.75C19.4882 19.8465 19.3576 19.9185 19.2164 19.9616C19.0752 20.0047 18.9265 20.0177 18.78 20C15.0349 19.5198 11.5562 17.8065 8.89269 15.1303C6.22917 12.4541 4.53239 8.96734 4.06998 5.22001C4.05406 5.07352 4.06801 4.92534 4.11098 4.7844C4.15395 4.64346 4.22505 4.51269 4.31998 4.40001C4.41369 4.29334 4.52904 4.20785 4.65836 4.14922C4.78767 4.0906 4.92799 4.06019 5.06998 4.06001H8.06998C8.30253 4.05483 8.5296 4.13088 8.71212 4.27508C8.89464 4.41927 9.02119 4.62258 9.06998 4.85001C9.10998 5.12334 9.15998 5.39334 9.21998 5.66001C9.3355 6.18715 9.48924 6.70518 9.67998 7.21001L8.27998 7.86001C8.16028 7.91493 8.0526 7.99295 7.96314 8.0896C7.87367 8.18625 7.80418 8.29962 7.75865 8.4232C7.71312 8.54678 7.69245 8.67814 7.69783 8.80973C7.7032 8.94132 7.73452 9.07055 7.78998 9.19C9.22918 12.2728 11.7072 14.7508 14.79 16.19C15.0334 16.29 15.3065 16.29 15.55 16.19C15.6747 16.1454 15.7893 16.0765 15.8871 15.9872C15.985 15.8979 16.0641 15.7901 16.12 15.67L16.74 14.27C17.2569 14.4549 17.7846 14.6085 18.32 14.73C18.5866 14.79 18.8566 14.84 19.13 14.88C19.3574 14.9288 19.5607 15.0553 19.7049 15.2379C19.8491 15.4204 19.9252 15.6475 19.92 15.88L19.94 19ZM21.86 2.68001C21.7585 2.43566 21.5643 2.24148 21.32 2.14001C21.1998 2.08876 21.0707 2.06159 20.94 2.06001H16.94C16.6748 2.06001 16.4204 2.16536 16.2329 2.3529C16.0453 2.54043 15.94 2.79479 15.94 3.06001C15.94 3.32522 16.0453 3.57958 16.2329 3.76711C16.4204 3.95465 16.6748 4.06001 16.94 4.06001H18.52L15.23 7.36001C15.0437 7.54737 14.9392 7.80082 14.9392 8.065C14.9392 8.32919 15.0437 8.58264 15.23 8.77001C15.4173 8.95626 15.6708 9.0608 15.935 9.0608C16.1992 9.0608 16.4526 8.95626 16.64 8.77001L19.94 5.48001V7.06001C19.94 7.32522 20.0453 7.57958 20.2329 7.76711C20.4204 7.95465 20.6748 8.06001 20.94 8.06001C21.2052 8.06001 21.4595 7.95465 21.6471 7.76711C21.8346 7.57958 21.94 7.32522 21.94 7.06001V3.06001C21.9384 2.92933 21.9112 2.80023 21.86 2.68001Z" fill="currentColor" />
                      </svg>
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

