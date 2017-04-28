import Cookie from './cookie'

const isLogin = () => {
  return Cookie.get('user_session')
    && Cookie.get('user_session') > new Date().getTime()
}
