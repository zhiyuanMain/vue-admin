const app = {
    state: {
        sidebar: {
            opened: true
        },
        tags: {
            tagLists: []
        }
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.sidebar.opened = !state.sidebar.opened;
        },
        SET_TAGS: (state, tags) => {
            state.tags.tagLists = tags;
        }
    },
    actions: {
        ToggleSlideBar: ({ commit }) => {
            commit('TOGGLE_SIDEBAR');
        },
        SetTags: ({ commit }, tags)  => {
            commit('SET_TAGS', tags);
        }
    }
}

export default app;