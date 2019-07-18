import { root, Root } from "../root"
import { credentialsApi, clearToken } from "../services"
import { routes } from "../routes"
import { router } from "../router"
import { home } from "../home"
import { register } from "../register"
import { login } from "../login"
import { articles } from "../articles"
import { articleSummary } from "../articleSummary"
import { articleEdit } from "../articleEdit"
import { articleDetail } from "../articleDetail"
import { pager } from "../pager"
import { settings } from "../settings"
import { profile } from "../profile"

const route = { current: router.initialRoute }

export const app = {
  Initial: () =>
    credentialsApi
      .getUser()
      .then(user => root.Initial({ user, route }))
      .catch(() => {
        clearToken()
        return root.Initial({ route })
      }),

  Actions: update =>
    Object.assign(
      {},
      routes.Actions(update),
      home.Actions(update),
      register.Actions(update),
      login.Actions(update),
      articleSummary.Actions(update),
      articleEdit.Actions(update),
      pager.Actions(update),
      settings.Actions(update),
      profile.Actions(update)
    ),

  acceptors: [
    settings.guard,
    routes.accept,
    home.accept,
    articles.accept,
    articleEdit.accept,
    register.accept,
    login.accept,
    settings.accept,
    profile.accept
  ],

  services: [home.service, profile.service, articleDetail.service, articleEdit.service],

  view: Root
}
