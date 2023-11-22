import React, { useState } from 'react';
import { addComment, getHighestCommentId } from '../../services/commentsService';
import { Comment } from '../../models/Comment';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AddCommentProps {
  postId: number;
}

const AddComment: React.FC<AddCommentProps> = ({ postId }) => {
  let [commentBody, setCommentBody] = useState('');
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');

  let handleAddComment = async () => {
    let highestId = await getHighestCommentId();
    let newComment: Comment = {
      postId,
      id: highestId + 1, 
      name, 
      email, 
      body: commentBody,
      likes: 0, 
      dislikes: 0, 
    };

    await addComment(newComment);
    setCommentBody(''); 
    setName('');
    setEmail('');
  };

  return (
    <div className="card mt-3 border border-dark rounded">
      <div className="card-body">
        <input type="text" className="form-control mb-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="Imię" />
        <input type="text" className="form-control mb-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
        <textarea className="form-control mb-2" value={commentBody} onChange={(e) => setCommentBody(e.target.value)} placeholder="Komentarz" />
        <button className="btn btn-primary" onClick={handleAddComment}>Dodaj komentarz</button>
      </div>
    </div>
  );
};

export default AddComment;
