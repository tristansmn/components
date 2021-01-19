import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
  	<div className="ui components comments">
  	 <ApprovalCard>
  	   <CommentDetail  
  	     author="Sam" 
  	     comment="Good Job"
  	   />
  	 </ApprovalCard>
  	 <ApprovalCard> 
  	   <CommentDetail  
  	     author="Arthur" 
  	     comment="Nice !"
  	   />
  	 </ApprovalCard>
  	 <ApprovalCard> 
  	   <CommentDetail  
  	     author="Bob" 
  	     comment="So poor..."
  	   />
    </ApprovalCard>
  	</div>
  );	
};

ReactDOM.render(< App />, document.querySelector('#root'))

 