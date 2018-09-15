import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends PureComponent {
  render() {
    const { list } = this.props

    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img src={item.get('imgUrl')} alt=""/>
                <span>{item.get('title')}</span>
              </TopicItem>
            )
          })
        }

      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'topicList'])
  }
}


export default connect(mapStateToProps, null)(Topic)
