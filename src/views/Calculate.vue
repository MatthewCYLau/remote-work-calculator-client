<template>
  <section class="w-full px-6 pb-12 antialiased bg-white">
    <div class="mx-auto max-w-7xl">
      <nav class="relative z-50 h-24 select-none" x-data="{ showMenu: false }">
        <div
          class="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2"
        >
          <div class="flex items-center justify-start w-1/4 h-full pr-4">
            <a href="/" class="inline-block py-4 md:py-0">
              <span class="p-1 text-xl font-black leading-none text-gray-900"
                ><span>Remote Work Calculator</span
                ><span class="text-blue-600">.</span></span
              >
            </a>
          </div>
          <div
            class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex"
            :class="{ 'flex fixed': true }"
          >
            <div
              class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row"
            >
              <a
                href="#_"
                class="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden"
                >tails<span class="text-blue-600">.</span></a
              >
              <div
                class="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center"
              ></div>
            </div>
          </div>
          <div
            @click="showMenu = !showMenu"
            class="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6 text-gray-700"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              x-cloak=""
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg
              class="w-6 h-6 text-gray-700"
              x-show="showMenu"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              x-cloak=""
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>
      </nav>

      <!-- Main Hero Content -->
      <div
        class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center"
      >
        <div class="flex items-center justify-center p-12">
          <!-- Author: FormBold Team -->
          <!-- Learn More: https://formbold.com -->
          <div class="mx-auto w-full max-w-[550px]">
            <form @submit.prevent="submit">
              <div
                class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
              >
                <div
                  class="bg-blue-600 h-2.5 rounded-full"
                  style="width: 45%"
                ></div>
              </div>
              <div class="mb-5">
                <label
                  for="name"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="message"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <button
                  class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                >
                  Back
                </button>
                <button
                  class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- End Main Hero Content -->
    </div>
  </section>
</template>
