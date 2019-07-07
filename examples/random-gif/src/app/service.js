import O from "patchinko/constant"

export const service = (state, update) => {
  if (state.event.id === "newGifGenerated") {
    const increment = state.counter.value > 3 && state.button.active ? 2 : 1
    update({ event: {}, counter: O({ value: O(x => x + increment) }) })
  }
}