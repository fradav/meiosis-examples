import m from "mithril"
import b from "bss"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const dateTime = {
  initialState,
  actions
}

const getErrorMessage = (state, field) =>
  (state.errors && state.errors.dateTime && state.errors.dateTime[field]) || " "

export const DateTime = {
  view: vnode => {
    const { state, actions } = vnode.attrs

    return (
      m("div",
        m("div",
          m("label" + b.d("inline-block").w(75), "Date:"),
          m("input", { type: "date", value: state.dateTime.date,
            onchange: evt => actions.editDate(evt.target.value)
          }),
          m("span" + b.ml(4).c("red"), getErrorMessage(state, "date"))
        ),
        m("div" + b.mt(4),
          m("label" + b.d("inline-block").w(75), "Hour:"),
          m("input", { type: "text", value: state.dateTime.hour,
            onchange: evt => actions.editHour(evt.target.value)
          }),
          m("span" + b.ml(4).c("red"), getErrorMessage(state, "hour"))
        ),
        m("div" + b.mt(4),
          m("label" + b.d("inline-block").w(75), "Minute:"),
          m("input", { type: "text", value: state.dateTime.minute,
            onchange: evt => actions.editMinute(evt.target.value)
          }),
          m("span" + b.ml(4).c("red"), getErrorMessage(state, "minute"))
        ),
        m("div" + b.mt(8),
          m("button" + b.bc("#EEEEEE").fs("1rem").pl(12).pr(12).pt(4).pb(4)
            .br("0.25rem").outline("none").borderColor("gray")
            .$hover(b.bc("lightgray")).$active(b.bc("gray")),
          { onclick: () => actions.validate(state) }, "Validate"),
          m("span" + b.ml(8), state.conditions.message)
        )
      )
    )
  }
}
