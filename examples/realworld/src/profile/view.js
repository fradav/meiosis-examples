import { get } from "../util/fp"
import { Route } from "../routes"
import { router } from "../router"
import { defaultImage } from "../util/view"
import { ArticleList } from "../articleList"

export const Profile = ({ state, actions, routing }) => {
  const username = get(state, ["profile", "username"])
  const isCurrentUser = get(state, ["profile", "username"]) === get(state, ["user", "username"])
  const isFavorites = routing.localSegment.id === "ProfileFavorites"

  return [
    ".profile-page",
    [
      ".user-info",
      [
        ".container",
        [
          ".row",
          [
            ".col-xs-12.col-md-10.offset-md-1",
            !state.profile
              ? "Loading..."
              : [
                  ["img.user-img", { src: state.profile.image || defaultImage }],
                  ["h4", username],
                  ["p", state.profile.bio],
                  isCurrentUser
                    ? [
                        "a.btn.btn-sm.btn-outline-secondary.action-btn",
                        { href: router.toPath(Route.Settings()) },
                        ["i.ion-gear-a"],
                        " Edit Profile Settings"
                      ]
                    : [
                        "button.btn.btn-sm.btn-outline-secondary.action-btn",
                        {
                          onClick: state.profile.following
                            ? () => actions.unfollow(username)
                            : () => actions.follow(username)
                        },
                        ["i.ion-plus-round"],
                        state.profile.following ? " Unfollow " : " Follow ",
                        username
                      ]
                ]
          ]
        ]
      ]
    ],
    state.profile && [
      ".container",
      [
        ".row",
        [
          ".col-xs-12.col-md-10.offset-md-1",
          [
            ".articles-toggle",
            [
              "ul.nav.nav-pills.outline-active",
              [
                "li.nav-item",
                [
                  "a.nav-link",
                  {
                    className: { active: !isFavorites },
                    href: router.toPath(Route.Profile({ username }))
                  },
                  "My Articles"
                ]
              ],
              [
                "li.nav-item",
                [
                  "a.nav-link",
                  {
                    className: { active: isFavorites },
                    href: router.toPath(Route.ProfileFavorites({ username }))
                  },
                  "Favorited Articles"
                ]
              ]
            ]
          ],
          ArticleList({ state, actions, routing })
        ]
      ]
    ]
  ]
}
