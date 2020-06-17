import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Task from '~/store/modules/task'
import Auth from '~/store/modules/auth'
import Goal from '~/store/modules/goal'

// eslint-disable-next-line import/no-mutable-exports
let taskStore: Task
// eslint-disable-next-line import/no-mutable-exports
let authStore: Auth
// eslint-disable-next-line import/no-mutable-exports
let goalStore: Goal

function initialiseStores(store: Store<any>): void {
  taskStore = getModule(Task, store)
  authStore = getModule(Auth, store)
  goalStore = getModule(Goal, store)
}

export { initialiseStores, taskStore, authStore, goalStore }
