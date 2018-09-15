import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true
})


export const login = (account, passwd) => {
  return (dispatch) => {
    axios.get('api/login.json?account=' + account + '&password=' + passwd)
      .then((res) => {
        const result = res.data.data
        if (result) {
          dispatch(changeLogin())
        } else {
          console.log('密码或账号有误,登录失败!')
        }
      })
  }
}

export const logout = () => ({
  type: actionTypes.CHANGE_LOGOUT,
  value: false
})
