import React, {PureComponent} from 'react';

import store from "../store";
import {
  incAction,
  addAction
} from "../store/actionCreators"

class Home extends PureComponent {

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
        <h2>Home</h2>
        <h3>当前计数：{count}</h3>
        <button onClick={() => this.increament()}>+1</button>
        <button onClick={() => this.addNums(5)}>+5</button>
      </div>
    );
  }

  increament() {
    store.dispatch(incAction())
  }

  addNums(num) {
    store.dispatch(addAction(num))
  }
}



export default Home;
