/* mithril
import m from "mithril"
import { h } from "seview/mithril"

export const render = element => view => m.render(element, h(view))
end mithril */

/* preact */
import preact from "preact"
import { h } from "seview/preact"

export const render = element => view => preact.render(h(view), element, element.lastElementChild)
/* end preact */

/* react
import ReactDOM from "react-dom"
import { h } from "seview/react"

export const render = element => view => ReactDOM.render(h(view), element)
end react */

export const defaultImage = "/assets/smiley-cyrus.jpg"
