import React, {Component} from 'react'
import PropType from 'prop-types'

export default class TabControl extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  render() {
    const {titles} = this.props
    const {currentIndex} = this.state

    return (
      <div className='tab-control'>
        {
          titles.map((item, index) => {
            return (
              <div key={item}
                   className={'tab-item ' + (currentIndex === index ? 'active' : '')}
                   onClick={() => this.itemClick(index)}
              >
                <span>{item}</span>
              </div>
            )
          })
        }
      </div>
    )
  }

  itemClick(index) {
    this.setState({
      currentIndex: index
    })
    const {tabControlClick} = this.props
    tabControlClick(index)
  }
}
// 类型检查
TabControl.propType = {
  titles: PropType.array.isRequired
}
