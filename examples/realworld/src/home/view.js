import { Route, getArticlesFilter } from "../routes"
import { router } from "../router"

import { ArticleList } from "../articleList"
import { PopularTags } from "../popularTags"

export const Home = ({ state, actions, routing }) => {
  const filter = getArticlesFilter(state.route)

  const content = filter.tag
    ? {
        globalFeed: false,
        tagFeedComponent: ["li.nav-item", ["a.nav-link.active", ["i.ion-pound"], " ", filter.tag]]
      }
    : {
        globalFeed: !filter.feed,
        tagFeedComponent: null
      }

  return [
    ".home-page",
    !state.user && [
      ".banner",
      [
        ".container",
        ["h1.logo-font", "conduit"],
        [
          "p",
          "A place to share your ",
          [
            "a",
            {
              href: "https://meiosis.js.org",
              target: "_blank",
              style: { color: "#fff", textDecoration: "underline" }
            },
            "Meiosis"
          ],
          " knowledge."
        ]
      ]
    ],
    [
      ".container page",
      [
        ".row",
        [
          ".col-md-9",
          [
            ".feed-toggle",
            [
              "ul.nav.nav-pills.outline-active",
              state.user && [
                "li.nav-item",
                [
                  "a.nav-link",
                  {
                    href: router.toPath([Route.Home({ feed: true })]),
                    className: { active: filter.feed }
                  },
                  "Your Feed"
                ]
              ],
              [
                "li.nav-item",
                [
                  "a.nav-link",
                  {
                    href: router.toPath([Route.Home({ feed: null })]),
                    className: { active: content.globalFeed }
                  },
                  "Global Feed"
                ]
              ],
              content.tagFeedComponent
            ]
          ],
          ArticleList({ state, actions, routing })
        ],
        [".col-md-3", [".sidebar", PopularTags({ state })]]
      ]
    ]
  ]
}
