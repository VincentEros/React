import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  LoginWrapper
} from './style'
import { actionCreators } from './store'

import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class Login extends Component {

  render() {

    const { getFieldDecorator } = this.props.form;
    const { isLogin } = this.props
    if (!isLogin) {
      return (
        <LoginWrapper>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [
                  { required: true, message: '请输入您的账户!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="邮箱/手机" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入您的密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住密码</Checkbox>
              )}
              <a className="login-form-forgot" href="">忘记密码</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              <a href="/signup">立即注册！</a>
            </FormItem>
          </Form>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/"/>
    }
  }
// 发送请求
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.props.login(values.userName, values.password, this.props.falseTimes)
      }
    });
  }
}


const mapState = (state) => ({
  isLogin: state.getIn(['login', 'isLogin']),
  falseTimes: state.getIn(['login', 'falseTimes'])
})

const mapDispatch = (dispatch) => ({
  login (userName, passwd, falseTimes) {
    dispatch(actionCreators.login(userName, passwd, falseTimes))
  }
})


const LoginPage = Form.create({})(Login);

export default connect(mapState, mapDispatch)(LoginPage)
