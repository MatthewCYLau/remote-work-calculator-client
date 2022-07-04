<template>
  <section class="w-full px-6 pb-12 antialiased bg-white">
    <div class="mx-auto max-w-7xl">
      <Nav />
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
import Nav from "../components/Nav.vue";

interface CalculateState {
  currentStep: number;
  coffeeCount: number;
  homePostcode: string;
  workPostcode: string;
}

export default defineComponent({
  components: { Dropdown, Nav },
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
        router.push({ name: "results" });
      });
    };

    const handleOnGetResultsLater = (): void => {
      const { post } = useApiWithAuth("/api/v2/calculations");
      post(calculateState).then((data) => {
        setCalculationId(data.id);
        router.push({ name: "results" });
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
