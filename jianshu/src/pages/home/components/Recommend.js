import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import {BoardItem} from '../style'

class Recommend extends PureComponent {
  render() {
    const { list } = this.props

    return (
      <div className="board">
        {
          list.map((item) => {
            return (
              <BoardItem key={item.get('id')}>
                <img src={item.get('imgUrl')} alt=""/>
              </BoardItem>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'boardList'])
  }
}

export default connect(mapStateToProps, null)(Recommend)
