<template>
  <section class="w-full px-6 pb-12 antialiased bg-white">
    <div class="mx-auto max-w-7xl">
      <Nav />

      <!-- Main Hero Content -->
      <div
        class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center"
      >
        <ResultsCard
          :subject="subject"
          :body="body"
          :shouldRenderCheckIcon="shouldWorkRemote || calculationId !== ''"
        />
      </div>
      <!-- End Main Hero Content -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useResults } from "../modules/results";
import Nav from "../components/Nav.vue";
import ResultsCard from "../components/ResultsCard.vue";

export default defineComponent({
  components: { Nav, ResultsCard },
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
  onBeforeUnmount() {
    const { setCalculationId } = useResults();
    setCalculationId("");
  },
});
</script>
