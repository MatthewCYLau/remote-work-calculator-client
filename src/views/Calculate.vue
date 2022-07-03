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
            <form @submit.prevent="">
              <div
                class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-10"
              >
                <div
                  class="bg-blue-600 h-2.5 rounded-full"
                  :style="{ width: (currentStep / 3) * 100 + '%' }"
                ></div>
              </div>
              <div class="mb-5" v-if="currentStep === 1">
                <label
                  for="homePostcode"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Home Postcode
                </label>
                <input
                  type="text"
                  name="homePostcode"
                  id="homePostcode"
                  placeholder="SW1A 1AA"
                  v-model="homePostcode"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5" v-if="currentStep === 2">
                <label
                  for="workPostcode"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Work Postcode
                </label>
                <input
                  type="text"
                  name="workPostcode"
                  id="workPostcode"
                  placeholder="SW1A 1AA"
                  v-model="workPostcode"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <Dropdown
                v-if="currentStep === 3"
                :options="options"
                :onClick="selectCoffeeCount"
                :selectedOption="selectedCoffeeCount"
              />
              <div>
                <div class="flex mt-4">
                  <button
                    class="border border-blue-500 text-blue-500 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center"
                    @click="handleOnPreviousClick"
                    :disabled="shouldDisablePreviousButton"
                    :class="{
                      'bg-blue-500 hover:bg-blue-400 hover:text-white text-white ':
                        !shouldDisablePreviousButton,
                    }"
                  >
                    <svg
                      class="h-5 w-5 mr-2 fill-current"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="-49 141 512 512"
                      style="enable-background: new -49 141 512 512"
                      xml:space="preserve"
                    >
                      <path
                        id="XMLID_10_"
                        d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"
                      ></path>
                    </svg>
                    Previous page
                  </button>
                  <button
                    class="border border-blue-500 text-blue-500 block rounded-sm font-bold py-4 px-6 ml-2 flex items-center"
                    v-if="currentStep !== 3"
                    @click="handleOnNextClick"
                    :disabled="shouldDisableNextButton"
                    :class="{
                      'bg-blue-500 hover:bg-blue-400 hover:text-white text-white':
                        !shouldDisableNextButton,
                    }"
                  >
                    Next page
                    <svg
                      class="h-5 w-5 ml-2 fill-current"
                      clasversion="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="-49 141 512 512"
                      style="enable-background: new -49 141 512 512"
                      xml:space="preserve"
                    >
                      <path
                        id="XMLID_11_"
                        d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
            l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
            c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"
                      />
                    </svg>
                  </button>
                  <button
                    class="border border-blue-500 text-blue-500 block rounded-sm font-bold py-4 px-6 ml-2 flex items-center bg-blue-500 hover:bg-blue-400 hover:text-white text-white"
                    v-if="currentStep === 3"
                    @click="handleOnCalculateNow"
                    type="submit"
                  >
                    Calculate now!
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
                  <button
                    class="border border-yellow-500 text-yellow-500 block rounded-sm font-bold py-4 px-6 ml-2 flex items-center bg-yellow-500 hover:bg-yellow-400 hover:text-white text-white"
                    v-if="currentStep === 3"
                    @click="handleOnGetResultsLater"
                    type="submit"
                  >
                    Get results later
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
import { defineComponent, computed, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useApiWithAuth } from "../modules/api";
import { useResults } from "../modules/results";
import Dropdown from "../components/Dropdown.vue";

interface CalculateState {
  currentStep: number;
  coffeeCount: number;
  homePostcode: string;
  workPostcode: string;
}

export default defineComponent({
  components: { Dropdown },
  setup() {
    const options: string[] = ["1", "2", "3", "I need help"];
    const router = useRouter();
    const { setSavings, setShouldWorkRemote, setCalculationId } = useResults();
    const calculateState = reactive<CalculateState>({
      currentStep: 1,
      coffeeCount: 0,
      homePostcode: "",
      workPostcode: "",
    });

    const handleOnNextClick = () => {
      calculateState.currentStep++;
    };

    const handleOnPreviousClick = () => {
      calculateState.currentStep--;
    };

    const shouldDisablePreviousButton = computed(
      () => calculateState.currentStep === 1
    );

    const shouldDisableNextButton = computed(
      () => calculateState.currentStep === 3
    );

    const selectCoffeeCount = (option: string) => {
      if (Number(option)) {
        calculateState.coffeeCount = +option;
      } else {
        calculateState.coffeeCount = 999;
      }
    };
    const handleOnCalculateNow = (): void => {
      const { post } = useApiWithAuth("/api/v1/calculations");
      post(calculateState).then((data) => {
        setSavings(data.savings);
        setShouldWorkRemote(data.shouldWorkRemote);
        router.push({ name: "success" });
      });
    };

    const handleOnGetResultsLater = (): void => {
      const { post } = useApiWithAuth("/api/v2/calculations");
      post(calculateState).then((data) => {
        setCalculationId(data.MessageId);
        router.push({ name: "success" });
      });
    };
    const selectedCoffeeCount = computed(() => calculateState.coffeeCount);

    return {
      handleOnNextClick,
      handleOnPreviousClick,
      shouldDisablePreviousButton,
      shouldDisableNextButton,
      selectCoffeeCount,
      selectedCoffeeCount,
      options,
      handleOnCalculateNow,
      handleOnGetResultsLater,
      ...toRefs(calculateState),
    };
  },
  onMounted() {
    // loadUser();
  },
});
</script>
