<template>
  <div
    class="relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md py-5 pl-6 pr-8 sm:pr-6"
  >
    <div class="bg-white p-6 md:mx-auto">
      <svg
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
          Opp! Calculation not found
        </h3>
        <p class="text-gray-600 my-2" v-if="lookUpId">
          {{ `Calculation reference: ${lookUpId}` }}
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    lookUpId: {
      type: String,
      required: false,
    },
  },
});
</script>
