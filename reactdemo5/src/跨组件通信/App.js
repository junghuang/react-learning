import React, {Component} from 'react';

const UserContext = React.createContext({
  nickName: 'anonymous',
  level: -1
})

// 函数组件要改写return，设置成为某个Context对象的Consumer
function ProfileHeader1() {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <div>
              <h2>ProfileHeader1</h2>
              <div>用户昵称：{value.nickName}</div>
              <div>用户等级：{value.level}</div>
            </div>
          )
        }
      }
    </UserContext.Consumer>
  )
}

// 类组件直接从context取值,但是要设置 组件.contextType = 设置好的Context对象
class ProfileHeader2 extends Component {
  render() {
    const {nickName, level} = this.context
    return (
      <div>
        <h2>ProfileHeader2</h2>
        <div>用户昵称：{nickName}</div>
        <div>用户等级：{level}</div>
      </div>
    )
  }
}
// 设置 组件.contextType = 设置好的Context对象
ProfileHeader2.contextType = UserContext

function Profile() {
  return (
    <div>
      <ProfileHeader1/>
      <ul>
        <li>用户信息1</li>
        <li>用户信息2</li>
        <li>用户信息3</li>
        <li>用户信息4</li>
      </ul>
      <ProfileHeader2/>
    </div>
  )
}

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      nickName: 'James',
      level: 99
    }
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile/>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
