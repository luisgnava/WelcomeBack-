import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Thread from './components/Thread.jsx';
import Discussions from './components/Discussions.jsx';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      thread: []

  };
    }
  addThread(query,userName){
    $.ajax({
      method:'POST',
      url:'/',
      contentType:'application/json',
      data: JSON.stringify({
        query:query,
        UserName:UserName
      })
    }).done(()=>{
      this.getThread();

    })
  }

    componentDidMount(){
      this.getThread();
    }

  render(){
  
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
