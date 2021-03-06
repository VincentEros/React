import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '手绘',
      imgUrl: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 2,
      title: '故事',
      imgUrl: 'https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 3,
      title: '手绘',
      imgUrl: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 4,
      title: '故事',
      imgUrl: 'https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 5,
      title: '手绘',
      imgUrl: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 6,
      title: '故事',
      imgUrl: 'https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 7,
      title: '手绘',
      imgUrl: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 8,
      title: '故事',
      imgUrl: 'https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }
  ],
  articleList: [
    {
      id: 1,
      imgUrl: 'https://upload-images.jianshu.io/upload_images/9305082-3d7003c281433ce4?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      title: 'Python&matplotlib打造数据可视化动态图，完美装逼！',
      abstract: '如何让Python数据可视化秀起来？ 电脑上没有安装ImageMagick的话，先去网上对照电脑系统下载相对应版本，因为用matplotlib的...',
      nickname: 'Python新世界',
      msg: 3,
      likes: 13
    },
    {
      id: 2,
      imgUrl: 'https://upload-images.jianshu.io/upload_images/9305082-3d7003c281433ce4?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      title: 'Python&matplotlib打造数据可视化动态图，完美装逼！',
      abstract: '如何让Python数据可视化秀起来？ 电脑上没有安装ImageMagick的话，先去网上对照电脑系统下载相对应版本，因为用matplotlib的...',
      nickname: 'Python新世界',
      msg: 3,
      likes: 13
    },
    {
      id: 3,
      imgUrl: 'https://upload-images.jianshu.io/upload_images/9305082-3d7003c281433ce4?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      title: 'Python&matplotlib打造数据可视化动态图，完美装逼！',
      abstract: '如何让Python数据可视化秀起来？ 电脑上没有安装ImageMagick的话，先去网上对照电脑系统下载相对应版本，因为用matplotlib的...',
      nickname: 'Python新世界',
      msg: 3,
      likes: 13
    },
    {
      id: 4,
      imgUrl: 'https://upload-images.jianshu.io/upload_images/9305082-3d7003c281433ce4?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      title: 'Python&matplotlib打造数据可视化动态图，完美装逼！',
      abstract: '如何让Python数据可视化秀起来？ 电脑上没有安装ImageMagick的话，先去网上对照电脑系统下载相对应版本，因为用matplotlib的...',
      nickname: 'Python新世界',
      msg: 3,
      likes: 13
    }
  ],
  boardList: [
    {
      id: 1,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },
    {
      id: 2,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    },
    {
      id: 3,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id: 4,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      id: 5,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }
  ],
  authorList: [
    {
      id: 1,
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/2558050/7761b285-2805-4534-9870-ba7dcc7538ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      userUrl: 'https://www.jianshu.com/u/d99a7dfae9e4?utm_source=desktop&utm_medium=index-users',
      name: '阿栈',
      wordNum: '367.1k',
      likes: '413'
    },
    {
      id: 2,
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/2558050/7761b285-2805-4534-9870-ba7dcc7538ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      userUrl: 'https://www.jianshu.com/u/d99a7dfae9e4?utm_source=desktop&utm_medium=index-users',
      name: '阿栈',
      wordNum: '367.1k',
      likes: '413'
    },
    {
      id: 3,
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/2558050/7761b285-2805-4534-9870-ba7dcc7538ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      userUrl: 'https://www.jianshu.com/u/d99a7dfae9e4?utm_source=desktop&utm_medium=index-users',
      name: '阿栈',
      wordNum: '367.1k',
      likes: '413'
    },
    {
      id: 4,
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/2558050/7761b285-2805-4534-9870-ba7dcc7538ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      userUrl: 'https://www.jianshu.com/u/d99a7dfae9e4?utm_source=desktop&utm_medium=index-users',
      name: '阿栈',
      wordNum: '367.1k',
      likes: '413'
    },
    {
      id: 5,
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/2558050/7761b285-2805-4534-9870-ba7dcc7538ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      userUrl: 'https://www.jianshu.com/u/d99a7dfae9e4?utm_source=desktop&utm_medium=index-users',
      name: '阿栈',
      wordNum: '367.1k',
      likes: '413'
    }
  ]
})

export default (state = defaultState, action) => {
  return state
}
