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
        <div
          class="relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md py-5 pl-6 pr-8 sm:pr-6"
        >
          <div class="bg-white p-6 md:mx-auto">
            <svg
              v-if="shouldWorkRemote || calculationId"
              viewBox="0 0 24 24"
              class="text-green-600 w-16 h-16 mx-auto my-6"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <svg
              v-if="!shouldWorkRemote && !calculationId"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="text-red-600 w-16 h-16 mx-auto my-6"
            >
              <path
                fill="currentColor"
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z"
              />
            </svg>
            <div class="text-center">
              <h3 class="md:text-2xl text-base text-gray-900 text-center">
                {{ subject }}
              </h3>
              <p class="text-gray-600 my-2">
                {{ body }}
              </p>
              <div class="flex flex-col items-center mt-12 text-center">
                <span class="relative inline-flex w-full md:w-auto">
                  <a
                    href="/calculate"
                    class="inline-flex items-center justify-center w-full px-8 py-2 text-base font-bold leading-6 text-white bg-blue-600 border border-transparent rounded-full md:w-auto hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                  >
                    Calculate again
                  </a>
                  <span
                    class="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full"
                    >now!</span
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Main Hero Content -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useResults } from "../modules/results";

export default defineComponent({
  setup() {
    const { savings, shouldWorkRemote, id } = useResults();
    const calculationId = id.value;
    const returnSubject = (): string => {
      if (calculationId) {
        return "Calculation submitted!";
      } else {
        return `You should ${shouldWorkRemote.value ? "" : "not "}work remote!`;
      }
    };

    const returnBody = (): string => {
      if (calculationId) {
        return `Calculation reference is: ${calculationId}`;
      } else {
        return `You would ${shouldWorkRemote.value ? "save" : "lose"} £${String(
          savings.value
        )} by working remote.`;
      }
    };
    const subject = returnSubject();

    const body = returnBody();

    return {
      subject,
      body,
      shouldWorkRemote,
      calculationId,
    };
  },
  components: {},
  onBeforeUnmount() {
    const { setCalculationId } = useResults();
    setCalculationId("");
  },
});
</script>
