import React, { useEffect, useState } from 'react';
import { getComments } from '../../services/commentsService';
import { Comment } from '../../models/Comment';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CommentsProps {
  postId: number;
}

const Comments: React.FC<CommentsProps> = ({ postId }) => {
  let [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    let fetchComments = async () => {
      let comments = await getComments();
      setComments(comments.filter(comment => comment.postId === postId));
    };

    fetchComments();
  }, [postId]);

  return (
    <div>
      {comments.map((comment: Comment) => (
  <div key={comment.id} className="card mt-3 border border-dark rounded">
    <div className="card-body">
      <h3 className="card-title">{comment.name}</h3>
      <p className="card-text">{comment.body}</p>
    </div>
  </div>
))}
    </div>
  );
};

export default Comments;