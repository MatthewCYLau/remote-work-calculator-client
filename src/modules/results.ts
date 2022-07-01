import { reactive, toRefs } from "vue";

interface ResultsState {
  savings: number;
  shouldWorkRemote: boolean;
}

const state = reactive<ResultsState>({
  savings: 0,
  shouldWorkRemote: false,
});

export const useResults = () => {
  const setSavings = (savings: number): void => {
    state.savings = savings;
  };

  const setShouldWorkRemote = (shouldWorkRemote: boolean): void => {
    state.shouldWorkRemote = shouldWorkRemote;
  };

  return {
    setSavings,
    setShouldWorkRemote,
    ...toRefs(state),
  };
};
