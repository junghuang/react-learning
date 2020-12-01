import React, {PureComponent} from 'react';

import store from "../store";
import {
  decAction,
  subAction
} from "../store/actionCreators"

class About extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      count: store.getState().count
    }
  }

  componentDidMount() {
    this.unSubscriber = store.subscribe(()=>{
      this.setState({
        count: store.getState().count
      })
    })
  }

  componentWillUnmount() {
    this.unSubscriber()
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <hr/>
        <h2>About</h2>
        <h3>当前计数：{count}</h3>
        <button onClick={() => this.decreament()}>-1</button>
        <button onClick={() => this.subNums(5)}>-5</button>
      </div>
    );
  }

  decreament() {
    store.dispatch(decAction())
  }

  subNums(num) {
    store.dispatch(subAction(num))
  }
}



export default About;
