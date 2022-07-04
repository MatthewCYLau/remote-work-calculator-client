<template>
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
          <div
            class="flex flex-col items-start justify-end w-full p-2 md:items-center md:w-1/3 md:flex-row md:py-0"
            v-if="shouldRenderNavigationCTAs"
          >
            <a
              href="/look-up"
              class="w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto"
              >Retrieve calculation</a
            >
            <a
              href="/calculate"
              class="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-blue-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-blue-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-blue-600"
              >Try now</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();

    const shouldRenderNavigationCTAs = computed(() => route.name === "home");

    return { shouldRenderNavigationCTAs };
  },
});
</script>
