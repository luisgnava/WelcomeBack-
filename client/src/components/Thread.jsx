import React from 'react';

class Thread extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (<div>
        <p>{this.props.thread.comment}</p>
        <button>Reply</button>
        </div>
    )
  }
}

export default Thread;
