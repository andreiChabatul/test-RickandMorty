import { RaMApiServices } from '@/services/RaM.api.service'
import type { ICharacter } from '@/types'
import type { State } from '@/types/store'
import type { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import type { ActionContext } from 'vuex/types/index.js'

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        results: [],
        page: 1,
        countPages: 0,
    },
    mutations: {
        setResults(state: State, results: ICharacter[]) {
            state.results = results;
        },
        setPage(state: State, page: number) {
            state.page = page;
        },
        setCountPages(state: State, count: number) {
            state.totalRecords = count;
        },
        resetFilter(state: State) {
            state.page = 1;
            state.filterName = undefined;
            state.filterStatus = undefined;
        }
    },
    actions: {

        async fetchAPI(context: ActionContext<State, Store>) {
            const state = context.state;
            const responceApi = await RaMApiServices.getAllCharacters({
                page: state.page,
                name: state.filterName,
                status: state.filterStatus
            });
            if (responceApi) {
                context.commit('setCountPages', responceApi.info.count);
                context.commit('setResults', responceApi.results);
            }
            else {
                context.commit('setCountPages', 0);
                context.commit('setResults', 0);
            }
        }
    }
})

export function useStore() {
    return baseUseStore(key)
}