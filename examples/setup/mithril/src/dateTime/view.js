import m from "mithril"
import b from "bss"
import { Button, TextField } from "polythene-mithril"

const getErrorMessage = (state, field) =>
  (state.errors && state.errors.dateTime && state.errors.dateTime[field]) || " "

export const DateTime = {
  view: ({ attrs: { context, actions } }) =>
    m(
      "div",
      m(TextField, {
        label: "Date:",
        type: "date",
        value: context.state.dateTime.date,
        events: {
          oninput: evt => actions.editDate(evt.target.value)
        },
        help: getErrorMessage(context.state, "date")
      }),
      m(
        "div" + b.mt(4),
        m(TextField, {
          label: "Hour:",
          value: context.state.dateTime.hour,
          events: {
            oninput: evt => actions.editHour(evt.target.value)
          },
          help: getErrorMessage(context.state, "hour")
        })
      ),
      m(
        "div" + b.mt(4),
        m(TextField, {
          label: "Minute:",
          value: context.state.dateTime.minute,
          events: {
            oninput: evt => actions.editMinute(evt.target.value)
          },
          help: getErrorMessage(context.state, "minute")
        })
      ),
      m(
        "div" + b.mt(8),
        m(Button, {
          label: "Validate",
          border: true,
          events: { onclick: () => actions.validate(context.state) }
        }),
        m("span" + b.ml(8), context.state.conditions.message)
      )
    )
}
