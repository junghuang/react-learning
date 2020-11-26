import React, {Component} from 'react'

import TabControl from "./TabControl";

export default class App extends Component {

  constructor(props) {
    super(props)

    this.titles = ['新款', '精选', '流行']

    this.state = {
      currentIndex: 0
    }
  }

  render() {
    const {currentIndex} = this.state
    return (
      <div>
        <TabControl
          titles={this.titles}
          // 这里传子传父的index要这样声明
          tabControlClick={index => this.tabControlClick(index)}
        />
        <h2>{this.titles[currentIndex]}</h2>
      </div>
    )
  }

  tabControlClick(index) {
    this.setState({
      currentIndex: index
    })
  }
}
