import { reactive, toRefs } from "vue";

interface ResultsState {
  savings: number;
  shouldWorkRemote: boolean;
  id: string;
}

const state = reactive<ResultsState>({
  savings: 0,
  shouldWorkRemote: false,
  id: "",
});

export const useResults = () => {
  const setSavings = (savings: number): void => {
    state.savings = savings;
  };

  const setShouldWorkRemote = (shouldWorkRemote: boolean): void => {
    state.shouldWorkRemote = shouldWorkRemote;
  };

  const setCalculationId = (id: string): void => {
    state.id = id;
  };

  return {
    setSavings,
    setShouldWorkRemote,
    setCalculationId,
    ...toRefs(state),
  };
};
