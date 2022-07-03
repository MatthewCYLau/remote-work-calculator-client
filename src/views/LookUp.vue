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
        </div>
      </nav>

      <!-- Main Hero Content -->
      <div
        class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center"
      >
        <div class="flex items-center justify-center p-12">
          <div class="mx-auto w-full max-w-[550px]">
            <form @submit.prevent="">
              <div class="mb-5">
                <label
                  for="homePostcode"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Unique Reference
                </label>
                <input
                  type="text"
                  name="id"
                  id="id"
                  placeholder="09a0df17-d341-4e87-a2bb-fe11e9d08d7b"
                  v-model="id"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div>
                <div class="flex mt-4">
                  <button
                    class="border border-blue-500 text-blue-500 block rounded-sm font-bold py-4 px-6 ml-2 flex items-center bg-blue-500 hover:bg-blue-400 hover:text-white text-white"
                    @click="handleOnSubmit"
                    type="submit"
                  >
                    Submit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="h-5 w-5 mr-2 fill-current ml-2"
                    >
                      <path
                        d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

interface LookUpState {
  id: string;
}

export default defineComponent({
  components: {},
  setup() {
    const router = useRouter();
    const lookUpState = reactive<LookUpState>({
      id: "",
    });

    const handleOnSubmit = (): void => {
      router.push({ path: `/calculations/${lookUpState.id}` });
    };

    return {
      handleOnSubmit,
      ...toRefs(lookUpState),
    };
  },
  onMounted() {
    // loadUser();
  },
});
</script>
