import React from 'react';
import Thread from './Thread.jsx'
const ThreadList = (props)=>
(

  <div>
    {console.log(props.thread.id)}

  {props.thread.map((thread)=> <Thread  key={Thread.id} thread={thread}  />)}

  </div>
);
export default ThreadList;
