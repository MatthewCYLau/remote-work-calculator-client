<template>
  <section class="w-full px-6 pb-12 antialiased bg-white">
    <div class="mx-auto max-w-7xl">
      <Nav />
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
import { useApiWithAuth } from "../modules/api";
import { useResults } from "../modules/results";
import { useRouter } from "vue-router";
import Nav from "../components/Nav.vue";

interface LookUpState {
  id: string;
}

export default defineComponent({
  components: { Nav },
  setup() {
    const router = useRouter();
    const { setSavings, setShouldWorkRemote } = useResults();
    const lookUpState = reactive<LookUpState>({
      id: "",
    });

    const handleOnSubmit = (): void => {
      const { get } = useApiWithAuth(`/api/calculations/${lookUpState.id}`);
      get().then((data) => {
        setSavings(data.savings);
        setShouldWorkRemote(data.shouldWorkRemote);
        router.push({ path: `/calculations/${lookUpState.id}` });
      });
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
