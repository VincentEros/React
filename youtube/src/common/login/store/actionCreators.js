import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeLogin = (userName, passwd) => ({
  type: actionTypes.CHANGE_LOGIN,
  // value: true
  userName,
  passwd
})

const loginFalse = (falseTimes) => ({
  type: actionTypes.LOGIN_FALSE,
  falseTimes
})

export const login = (userName, passwd, falseTimes) => {
  return (dispatch) => {
    falseTimes < 5 ?
      (axios.get('api/login.json?account=' + userName + '&password=' + passwd)
      .then((res) => {
        const result = res.data.data
        if (result.userName === userName && result.passwd === passwd) {
          localStorage.setItem('isLogin', JSON.stringify(true)) //缓存登录状态
          dispatch(changeLogin(userName, passwd))
        } else {
          dispatch(loginFalse(falseTimes+1))
          alert('密码或账号有误,请重新输入!')
        }
      }).catch())
      : alert('您的错误次数过多，请稍后再试。')

  }
}


export const keepIsLoginChange = (isLogin) => ({
  type: actionTypes.KEEP_IS_LOGIN,
  isLogin
})
