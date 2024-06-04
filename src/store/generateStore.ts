import { MAX_GENERATE_TEXT_LENGTH } from '@/constants/generate';
import { ExampleItem, GeneratedItem } from '@/types/service';
import { create } from 'zustand';

// PRE_GENERATE > GENERATE > DONE
export const STEP = {
  PRE_GENERATE: 'PRE_GENERATE',
  GENERATE: 'GENERATE',
  DONE: 'DONE',
} as const;
export type Step = (typeof STEP)[keyof typeof STEP];

type State = {
  step: Step;

  selectedExampleItem: ExampleItem | null;
  fableTexts: string[];

  generatedItems: GeneratedItem[];
};
type Action = {
  setStep: (currentStep: Step) => void;

  setSelectedExampleItem: (target: ExampleItem | null) => void;
  setTargetFableText: (index: number, text: string) => void;

  setGeneratedItems: (items: GeneratedItem[]) => void;

  clearStore: () => void;
};

const DEFAULT_STATE: State = {
  step: STEP.PRE_GENERATE,

  selectedExampleItem: null,
  fableTexts: new Array(5).fill(''),

  generatedItems: [],
} as const;

const useGenerateStore = create<State & Action>((set) => ({
  ...DEFAULT_STATE,

  setStep: (currentStep) => set({ step: currentStep }),

  setSelectedExampleItem: (target) => set({ selectedExampleItem: target }),
  setTargetFableText: (index, text) => {
    set((state) => {
      const newValue = [...state.fableTexts];
      newValue[index] = text.slice(0, MAX_GENERATE_TEXT_LENGTH);
      return { fableTexts: newValue };
    });
  },

  setGeneratedItems: (items) => set({ generatedItems: items }),

  clearStore: () => set({ ...DEFAULT_STATE }),
}));

export default useGenerateStore;
