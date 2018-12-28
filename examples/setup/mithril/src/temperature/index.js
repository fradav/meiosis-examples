import m from "mithril"
import b from "bss"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const temperature = {
  initialState,
  actions
}

const buttonStyle = b.fs("1rem").w("8rem").pl(12).pr(12).pt(4).pb(4)
  .c("white").bc("RoyalBlue").$hover(b.bc("blue")).$active(b.bc("darkblue"))
  .outline("none").borderColor("blue").br("0.25rem").mr(4)

export const Temperature = {
  view: vnode => {
    const { state, id, actions } = vnode.attrs

    return (
      m("div",
        m("div" + b.mt(8),
          m("label",
            "Temperature: ", state[id].value, m.trust("&deg;"), state[id].units)
        ),
        m("div" + b.mt(8),
          m("button" + buttonStyle, { onclick: () => actions.increment(id, 1) },
            "Increment"),
          m("button" + buttonStyle, { onclick: () => actions.increment(id,-1) },
            "Decrement"),
          m("button" + buttonStyle.bc("MediumSeaGreen").borderColor("lightgreen")
            .$hover(b.bc("green")).$active(b.bc("darkgreen")),
          { onclick: () => actions.changeUnits(id) },
          "Change Units")
        )
      )
    )
  }
}
