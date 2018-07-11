const getters = {
    sidebar: state => state.app.sidebar,
    tags: state => state.app.tags,
    token: state => state.user.token,
    name: state => state.user.name,
    avator: state => state.user.avator,
    roles: state => state.user.roles
}

export default getters;