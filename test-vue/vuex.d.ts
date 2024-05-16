import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    page: number
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}