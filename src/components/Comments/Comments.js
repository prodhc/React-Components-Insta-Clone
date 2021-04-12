import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props.comments;

  return (
    <div>
      {comments.map(comment => {
        {return <comment comment={comment}/>}
      })}
      {/* map through the comments prop and render a Comment for every piece of data */}
    </div>
  );
};

export default Comments;
