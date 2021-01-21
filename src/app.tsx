import { Component } from 'react';
import * as React from 'react';
import './app.scss';


class App extends Component {

  componentDidMount () {    
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return (      
      this.props.children            
    ) 
  }
}

export default App
