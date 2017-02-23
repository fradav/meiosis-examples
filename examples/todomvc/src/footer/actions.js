import flyd from "flyd";

export const actions = {
  clearCompleted: flyd.stream(),
  filter: flyd.stream()
};

export const intents = {
  clearCompleted: () => actions.clearCompleted(true),
  filter: by => evt => {
    evt.preventDefault();
    actions.filter(by);
  }
};
