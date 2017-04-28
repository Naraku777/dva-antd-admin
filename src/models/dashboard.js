import { query } from '../services/dashboard'

export default {
  namespace: 'dashboard',
  state: {
    numbers: [],
    regionChartData: [],
    osChartData: [],
    terminalChartData: [],
    ageChartData: []
  },
  reducers: {
    querySuccess(state, action) {
      return { ...state, ...action.payload }
    }
  },
  effects: {
    *query({ payload }, { call, put }) {
      const { data } = yield call(query, payload)
      if (data.success) {
        yield put({ type: 'querySuccess', payload: { ...data.data } })
      }
    }
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'query' })
    }
  },
};
