import React, {Component} from 'react'
import Swiper from 'swiper/dist/js/swiper'
import 'swiper/dist/css/swiper.min.css'

class SwiperBox extends Component {
  render() {
    // const items = this.renderList()
    return (
      <div className="wxchat-banner">
        <section className="new_custom swiper-container index_tab_con" ref={self => this.swiperID = self}>
          <ul className="swiper-wrapper">
            <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536871897674&di=921e03932136d9f09d0b6c28d097fab4&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180828%2Fcea32f7dc94b419ca75d9c134b62a538.jpeg" alt=""/></li>
            <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536871897674&di=921e03932136d9f09d0b6c28d097fab4&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180828%2Fcea32f7dc94b419ca75d9c134b62a538.jpeg" alt=""/></li>
            <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536871897674&di=921e03932136d9f09d0b6c28d097fab4&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180828%2Fcea32f7dc94b419ca75d9c134b62a538.jpeg" alt=""/></li>
          </ul>
          <div className="swiper-pagination banner-pagination" ref={self => this.paginateID = self}></div>
        </section>
      </div>
    )
  }

  componentDidMount() {
    new Swiper(this.swiperID, {
      pagination: {
        el: this.paginateID,
      },
    });
  }


}

export default SwiperBox
