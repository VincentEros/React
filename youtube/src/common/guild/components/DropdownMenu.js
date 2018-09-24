import React from 'react'
import { Menu, Icon } from 'antd'
import { ssss } from './MastheadContainer'

export const yieldMenu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> 上传视频</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/"><Icon type="youtube" /> 开始直播</a>
    </Menu.Item>
  </Menu>
)

export const appMenu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> YouTube TV</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/"><Icon type="youtube" /> YouTube Gaming</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> YouTube Music</a>
    </Menu.Item>
    <Menu.Item key="4">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> YouTube 少儿版</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="5">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> 创作者学院</a>
    </Menu.Item>
    <Menu.Item key="6">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> YouTube 音乐人之家</a>
    </Menu.Item>
  </Menu>
)



export const msgMenu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> YouTube 分享视频的新方式</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
    </Menu.Item>
  </Menu>
)


export const notiMenu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> YouTube 分享视频的新方式</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
    </Menu.Item>
  </Menu>
)

export const accountMenu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> YouTube 分享视频的新方式</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> 我的频道</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> 付费会员</a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> YouTube Studio（测试版）</a>
    </Menu.Item>
    <Menu.Item key="4">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> 切换账号</a>
    </Menu.Item>
    <Menu.Item key="5" onClick={() => {
      localStorage.setItem('isLogin', JSON.stringify(false)) //缓存登录状态
      // let locationNow = window.location.href
      // if (locationNow正则匹配 若属于权限页面) {
      //   跳转到login页面
      // } else {
      //   跳转到当前界面
      // }
      window.location.reload()
    }}>
      <div><Icon type="youtube" /> 退出账号</div>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="6">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> 深色主题背景：关闭</a>
    </Menu.Item>
    <Menu.Item key="7">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> 语言：中文</a>
    </Menu.Item>
    <Menu.Item key="8">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> 设置</a>
    </Menu.Item>
    <Menu.Item key="9">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> 帮助</a>
    </Menu.Item>
    <Menu.Item key="10">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> 发送反馈</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="11">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> 位置：美国</a>
    </Menu.Item>
    <Menu.Item key="12">
      <a href="http://www.alipay.com/"><Icon type="youtube" /> 受限模式：关闭</a>
    </Menu.Item>
  </Menu>
)

