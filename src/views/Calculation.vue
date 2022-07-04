<template>
  <section class="w-full px-6 pb-12 antialiased bg-white">
    <div class="mx-auto max-w-7xl">
      <Nav />
      <!-- Main Hero Content -->
      <div
        class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center"
      >
        <ResultsCard
          v-if="savings"
          :subject="subject"
          :body="body"
          :shouldRenderCheckIcon="shouldWorkRemote || calculationId !== ''"
          :lookUpId="props.id"
        />
        <NotFoundCard v-if="!savings" :lookUpId="props.id" />
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
import NotFoundCard from "../components/NotFoundCard.vue";

export default defineComponent({
  components: { Nav, ResultsCard, NotFoundCard },
  props: ["id"],
  setup(props) {
    const { savings, shouldWorkRemote, id } = useResults();
    const calculationId = id.value;
    const subject = savings
      ? `You should ${shouldWorkRemote.value ? "" : "not "}work remote!`
      : "";

    const body = savings
      ? `You would ${shouldWorkRemote.value ? "save" : "lose"} £${String(
          savings.value
        )} by working remote.`
      : "";

    return {
      subject,
      body,
      shouldWorkRemote,
      calculationId,
      props,
      savings,
    };
  },
  onBeforeUnmount() {
    const { setCalculationId } = useResults();
    setCalculationId("");
  },
});
</script>
