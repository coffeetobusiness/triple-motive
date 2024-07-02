import React from 'react';

export default function MoreCompSectionContact2() {
    return (
        <React.Fragment>
            <>
                <section className="relative py-12 md:py-24 lg:py-32 bg-body overflow-hidden">
  <div className="relative container mx-auto px-4">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/2 px-4 mb-20 lg:mb-0">
        <div className="relative z-10 max-w-lg lg:max-w-md mx-auto lg:mx-0">
          <span className="block text-sm font-medium text-sky-900 mb-4">CONTACT US</span>
          <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl xl:text-7xl font-medium text-white tracking-tight mb-16">Get in touch!</h2>
          <form action>
            <label className="block mb-1 text-sm font-medium text-white" htmlFor>Name</label>
            <input className="block w-full h-12 py-2 px-4 mb-5 text-sm placeholder-gray-600 text-gray-200 border border-gray-700 rounded-lg bg-gray-800 outline-none focus:border-violet-600" type="text" placeholder="Enter your name" />
            <label className="block mb-1 text-sm font-medium text-white" htmlFor>Email</label>
            <input className="block w-full h-12 py-2 px-4 mb-5 text-sm placeholder-gray-600 text-gray-200 border border-gray-700 rounded-lg bg-gray-800 outline-none focus:border-violet-600" type="email" placeholder="pat@saturn.dev" />
            <label className="block mb-1 text-sm font-medium text-white" htmlFor>Message</label>
            <textarea className="w-full h-24 py-2 px-4 mb-5 text-sm placeholder-gray-600 text-gray-200 border border-gray-700 rounded-lg bg-gray-800 outline-none focus:border-violet-600 resize-none" name id placeholder="Enter your message" cols={30} rows={10} defaultValue={""} />
            <div className="mb-5">
              <label className="custom-checkbox flex items-center relative h-8 cursor-pointer">
                <p className="inline-block ml-6 text-sm text-gray-400">
                  <span>I agree with</span>
                  <a className="inline-block text-sky-900 hover:text-violet-500" href="#">Privacy Policy</a>
                  <span>and</span>
                  <a className="inline-block text-sky-900 hover:text-violet-500" href="#">Terms of Conditions</a>
                </p>
                <input className="absolute top-0 left-0 transform translate-y-1/2 w-4 h-4 opacity-0" type="checkbox" defaultChecked />
                <span className="custom-check absolute top-0 left-0 transform translate-y-1/2 flex h-4 w-4 items-center justify-center bg-violet-400 border border-violet-700 rounded">
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4733 4.80667C12.4114 4.74418 12.3376 4.69458 12.2564 4.66074C12.1752 4.62689 12.088 4.60947 12 4.60947C11.912 4.60947 11.8249 4.62689 11.7436 4.66074C11.6624 4.69458 11.5886 4.74418 11.5267 4.80667L6.56001 9.78L4.47334 7.68667C4.40899 7.62451 4.33303 7.57563 4.2498 7.54283C4.16656 7.51003 4.07768 7.49394 3.98822 7.49549C3.89877 7.49703 3.8105 7.51619 3.72844 7.55185C3.64639 7.58751 3.57217 7.63898 3.51001 7.70333C3.44785 7.76768 3.39897 7.84364 3.36617 7.92688C3.33337 8.01011 3.31728 8.099 3.31883 8.18845C3.32038 8.2779 3.33953 8.36618 3.37519 8.44823C3.41085 8.53028 3.46233 8.60451 3.52667 8.66667L6.08667 11.2267C6.14865 11.2892 6.22238 11.3387 6.30362 11.3726C6.38486 11.4064 6.472 11.4239 6.56001 11.4239C6.64802 11.4239 6.73515 11.4064 6.81639 11.3726C6.89763 11.3387 6.97137 11.2892 7.03334 11.2267L12.4733 5.78667C12.541 5.72424 12.595 5.64847 12.632 5.56414C12.6689 5.4798 12.688 5.38873 12.688 5.29667C12.688 5.2046 12.6689 5.11353 12.632 5.02919C12.595 4.94486 12.541 4.86909 12.4733 4.80667Z" fill="currentColor" />
                  </svg>
                </span>
              </label>
            </div>
            <button className="group inline-flex w-full h-14 px-7 items-center justify-center text-base font-medium text-black hover:text-violet-800 bg-violet-500 hover:bg-white transition duration-200 rounded-full" type="submit">
              <span className="mr-2">SUBMIT</span>
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z" fill="currentColor" />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 px-4">
        <div className="absolute top-0 left-0 -mt-112 ml-40 w-186 h-186 bg-gradient-to-t from-blue-500 via-darkBlue-900 to-transparent rounded-full filter blur-4xl" />
        <div className="absolute top-0 left-0 -mt-112 -ml-72 w-186 h-186 bg-gradient-to-t from-purple-600 via-darkBlue-900 to-transparent rounded-full filter blur-4xl" />
        <div className="relative max-w-lg mx-auto lg:mr-0 pt-12 px-12 pb-14 rounded-3xl overflow-hidden">
          <img className="absolute top-0 left-0 w-full h-full" src="casper-assets/contact/bg-gradient.png" alt />
          <div className="relative">
            <h3 className="text-5xl font-semibold mb-3">Let’s stay connected</h3>
            <span className="block text-xl text-gray-900 tracking-tight mb-20 sm:mb-36">We’re 24/7 ready to help you at anytime</span>
            <div className="flex mb-12 items-center">
              <div className="flex-shrink-0 flex mr-4 items-center justify-center w-12 sm:w-20 h-12 sm:h-20 rounded-full bg-white">
                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.92 17.3333C25.6267 17.3333 25.32 17.24 25.0267 17.1733C24.4326 17.0424 23.8489 16.8686 23.28 16.6533C22.6614 16.4283 21.9815 16.44 21.3711 16.6861C20.7606 16.9323 20.2628 17.3955 19.9733 17.9867L19.68 18.5867C18.3813 17.8642 17.188 16.967 16.1333 15.92C15.0864 14.8654 14.1891 13.672 13.4667 12.3733L14.0267 12C14.6178 11.7106 15.081 11.2127 15.3272 10.6023C15.5733 9.9918 15.585 9.31188 15.36 8.69333C15.1483 8.12323 14.9746 7.53973 14.84 6.94667C14.7733 6.65333 14.72 6.34667 14.68 6.04C14.5181 5.10083 14.0262 4.25032 13.2928 3.64165C12.5595 3.03298 11.6329 2.70615 10.68 2.72H6.68C6.10537 2.71461 5.53633 2.83309 5.01161 3.06737C4.48689 3.30166 4.01881 3.64626 3.63924 4.07771C3.25966 4.50916 2.97751 5.01733 2.81198 5.56762C2.64645 6.11791 2.60144 6.69741 2.68 7.26667C3.39031 12.8525 5.94137 18.0425 9.9302 22.0168C13.919 25.9912 19.1183 28.5233 24.7067 29.2133H25.2133C26.1966 29.2148 27.1459 28.854 27.88 28.2C28.3018 27.8227 28.6388 27.3602 28.8686 26.8431C29.0985 26.3259 29.216 25.7659 29.2133 25.2V21.2C29.197 20.2738 28.8597 19.3821 28.2591 18.6769C27.6585 17.9717 26.8318 17.4968 25.92 17.3333ZM26.5867 25.3333C26.5864 25.5226 26.5459 25.7097 26.4677 25.8822C26.3895 26.0546 26.2756 26.2084 26.1333 26.3333C25.9872 26.4665 25.8133 26.5655 25.6242 26.6231C25.4351 26.6808 25.2356 26.6956 25.04 26.6667C20.0465 26.0264 15.4083 23.742 11.857 20.1737C8.30559 16.6055 6.04321 11.9565 5.42666 6.96C5.40544 6.76469 5.42404 6.56711 5.48133 6.37919C5.53863 6.19127 5.63342 6.01692 5.76 5.86667C5.88494 5.72444 6.03875 5.61046 6.21117 5.53229C6.38359 5.45413 6.57068 5.41357 6.76 5.41333H10.76C11.0701 5.40644 11.3728 5.50784 11.6162 5.7001C11.8595 5.89235 12.0283 6.16343 12.0933 6.46667C12.1467 6.83111 12.2133 7.19111 12.2933 7.54667C12.4474 8.24953 12.6523 8.94024 12.9067 9.61333L11.04 10.48C10.8804 10.5532 10.7368 10.6573 10.6175 10.7861C10.4983 10.915 10.4056 11.0662 10.3449 11.2309C10.2842 11.3957 10.2566 11.5708 10.2638 11.7463C10.271 11.9218 10.3127 12.0941 10.3867 12.2533C12.3056 16.3637 15.6097 19.6677 19.72 21.5867C20.0446 21.72 20.4087 21.72 20.7333 21.5867C20.8996 21.5272 21.0524 21.4353 21.1829 21.3162C21.3134 21.1972 21.4189 21.0535 21.4933 20.8933L22.32 19.0267C23.0093 19.2732 23.7128 19.478 24.4267 19.64C24.7822 19.72 25.1422 19.7867 25.5067 19.84C25.8099 19.9051 26.081 20.0738 26.2732 20.3171C26.4655 20.5605 26.5669 20.8633 26.56 21.1733L26.5867 25.3333ZM25.3333 13.3333C25.687 13.3333 26.0261 13.1929 26.2761 12.9428C26.5262 12.6928 26.6667 12.3536 26.6667 12V6.66667C26.6667 6.31305 26.5262 5.97391 26.2761 5.72386C26.0261 5.47381 25.687 5.33333 25.3333 5.33333C24.9797 5.33333 24.6406 5.47381 24.3905 5.72386C24.1405 5.97391 24 6.31305 24 6.66667V12C24 12.3536 24.1405 12.6928 24.3905 12.9428C24.6406 13.1929 24.9797 13.3333 25.3333 13.3333ZM20 13.3333C20.3536 13.3333 20.6928 13.1929 20.9428 12.9428C21.1929 12.6928 21.3333 12.3536 21.3333 12V6.66667C21.3333 6.31305 21.1929 5.97391 20.9428 5.72386C20.6928 5.47381 20.3536 5.33333 20 5.33333C19.6464 5.33333 19.3072 5.47381 19.0572 5.72386C18.8071 5.97391 18.6667 6.31305 18.6667 6.66667V12C18.6667 12.3536 18.8071 12.6928 19.0572 12.9428C19.3072 13.1929 19.6464 13.3333 20 13.3333Z" fill="black" />
                </svg>
              </div>
              <div>
                <span className="block text-lg tracking-tight text-gray-700">Phone</span>
                <span className="sm:text-2xl">+1 892 3298</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 flex mr-4 items-center justify-center w-12 sm:w-20 h-12 sm:h-20 rounded-full bg-white">
                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.6667 15.3467H21.8933C22.0688 15.3477 22.2428 15.314 22.4052 15.2477C22.5677 15.1813 22.7154 15.0836 22.84 14.96L28.9467 8.85333C29.0716 8.72938 29.1708 8.58191 29.2385 8.41943C29.3062 8.25695 29.3411 8.08267 29.3411 7.90666C29.3411 7.73064 29.3062 7.55637 29.2385 7.39389C29.1708 7.23141 29.0716 7.08394 28.9467 6.95999L25.72 3.73333C25.5961 3.60835 25.4486 3.50916 25.2861 3.44147C25.1236 3.37378 24.9494 3.33893 24.7733 3.33893C24.5973 3.33893 24.423 3.37378 24.2606 3.44147C24.0981 3.50916 23.9506 3.60835 23.8267 3.73333L17.72 9.83999C17.4764 10.0955 17.3383 10.4336 17.3333 10.7867V14.0133C17.3333 14.3669 17.4738 14.7061 17.7239 14.9561C17.9739 15.2062 18.3131 15.3467 18.6667 15.3467ZM20 11.3467L24.7733 6.57333L26.1067 7.90666L21.3333 12.68H20V11.3467ZM28 14.0133C27.6464 14.0133 27.3072 14.1538 27.0572 14.4038C26.8071 14.6539 26.6667 14.993 26.6667 15.3467V24.68C26.6667 25.0336 26.5262 25.3728 26.2761 25.6228C26.0261 25.8728 25.687 26.0133 25.3333 26.0133H6.66667C6.31305 26.0133 5.97391 25.8728 5.72386 25.6228C5.47381 25.3728 5.33334 25.0336 5.33334 24.68V11.8667L13.1733 19.72C13.5454 20.0969 13.9887 20.3962 14.4773 20.6005C14.966 20.8047 15.4904 20.9099 16.02 20.9099C16.5496 20.9099 17.074 20.8047 17.5627 20.6005C18.0514 20.3962 18.4946 20.0969 18.8667 19.72C19.111 19.4708 19.2478 19.1357 19.2478 18.7867C19.2478 18.4377 19.111 18.1026 18.8667 17.8533C18.7425 17.7263 18.5942 17.6254 18.4305 17.5565C18.2668 17.4876 18.091 17.4522 17.9133 17.4522C17.7357 17.4522 17.5599 17.4876 17.3962 17.5565C17.2325 17.6254 17.0842 17.7263 16.96 17.8533C16.7108 18.0976 16.3757 18.2345 16.0267 18.2345C15.6777 18.2345 15.3426 18.0976 15.0933 17.8533L7.21334 9.98666H13.3333C13.687 9.98666 14.0261 9.84618 14.2761 9.59614C14.5262 9.34609 14.6667 9.00695 14.6667 8.65333C14.6667 8.2997 14.5262 7.96057 14.2761 7.71052C14.0261 7.46047 13.687 7.31999 13.3333 7.31999H6.66667C5.60581 7.31999 4.58839 7.74142 3.83824 8.49157C3.0881 9.24171 2.66667 10.2591 2.66667 11.32V24.6533C2.66667 25.7142 3.0881 26.7316 3.83824 27.4818C4.58839 28.2319 5.60581 28.6533 6.66667 28.6533H25.3333C26.3942 28.6533 27.4116 28.2319 28.1618 27.4818C28.9119 26.7316 29.3333 25.7142 29.3333 24.6533V15.32C29.3333 14.9664 29.1929 14.6272 28.9428 14.3772C28.6928 14.1271 28.3536 13.9867 28 13.9867V14.0133Z" fill="black" />
                </svg>
              </div>
              <div>
                <span className="block text-lg tracking-tight text-gray-700">Email</span>
                <span className="sm:text-2xl">hello@yourdomain.com</span>
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
