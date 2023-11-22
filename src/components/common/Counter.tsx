import React, { useState } from "react";
import { updatePost } from '../../services/postsService';
import { updateComment } from '../../services/commentsService';
import { Post } from '../../models/Post';
import { Comment } from '../../models/Comment';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

interface IProps{
    post?: Post;
    comment?: Comment;
}
interface IState{
    likes : number;
    dislikes: number;
    userVote: 'like' | 'dislike' | null; 
}

let Counter:React.FC<IProps> = ({ post, comment }) => {

    let [state , setState] = useState<IState>({
        likes : post?.likes || comment?.likes || 0,
        dislikes: post?.dislikes || comment?.dislikes || 0,
        userVote: null
    });

    let incr = async (): Promise<void> => {
        let newLikes = state.likes;
        let newDislikes = state.dislikes;
        if (state.userVote === 'dislike') {
            newLikes++;
            newDislikes--;
        } else if (state.userVote === null) {
            newLikes++;
        }
        setState({
            likes : newLikes,
            dislikes: newDislikes,
            userVote: 'like'
        });
        if (post) {
            let updatedPost = { ...post, likes: newLikes, dislikes: newDislikes };
            await updatePost(updatedPost);
            console.log('Updated post:', updatedPost);
        } else if (comment) {
            let updatedComment = { ...comment, likes: newLikes, dislikes: newDislikes };
            await updateComment(comment.id, updatedComment);
            console.log('Updated comment:', updatedComment);
        }
    };

    let dincr = async (): Promise<void> => {
        let newLikes = state.likes;
        let newDislikes = state.dislikes;
        if (state.userVote === 'like') {
            newLikes--;
            newDislikes++;
        } else if (state.userVote === null) {
            newDislikes++;
        }
        setState({
            likes : newLikes,
            dislikes: newDislikes,
            userVote: 'dislike'
        });
        if (post) {
            let updatedPost = { ...post, likes: newLikes, dislikes: newDislikes };
            await updatePost(updatedPost);
            console.log('Updated post:', updatedPost);
        } else if (comment) {
            let updatedComment = { ...comment, likes: newLikes, dislikes: newDislikes };
            await updateComment(comment.id, updatedComment);
            console.log('Updated comment:', updatedComment);
        }
    };

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-1-4">
                        <div className="card d-inline-block">
                            <div className="card-body bg-white rounded">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <FaThumbsUp className="m-2" onClick={incr} style={{cursor: 'pointer', color: state.userVote === 'like' ? 'green' : 'black'}}/>
                                        <span> {state.likes} </span>
                                    </div>
                                    <div>
                                        <FaThumbsDown className="m-2" onClick={dincr} style={{cursor: 'pointer', color: state.userVote === 'dislike' ? 'red' : 'black'}}/>
                                        <span> {state.dislikes} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Counter;
