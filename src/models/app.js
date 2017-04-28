
export default {
  namespace: 'app',
  state: {
    user: {},
    isSiderCollapsed: false
  },
  reducers: {
    toggleSider(state) {
      return {
        ...state,
        isSiderCollapsed: !state.isSiderCollapsed
      }
    }
  },
  effects: {},
  subscriptions: {},
};
