import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddThread from './components/Thread.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      thread: []
  }
}
  addThread(comment,userName){
    $.ajax({
      method:'POST',
      url:'/',
      contentType: 'application/json',
      data:JSON.stringify({
        comment:comment,
        userName:userName
      })
    }).done(()=>{
      this.getThread()
    })
  }
  getThread(){
    $.ajax({
      url:'/',
      method:"GET",
      success: (results) =>{
        this.setState({thread:results})
      },
      error:(xhr,err) => {
        console.log("err", err);
      }

    })
  }
  componentDidMount(){
    this.getThread()
  }


 render() {
    return (
      <AddThread addThread= {this.addThread}/>

    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
