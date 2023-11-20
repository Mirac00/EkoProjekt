import React, { useState } from "react";
import { updatePost } from '../../services/postsService';
import { Post } from '../../models/Post';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IProps{
    post: Post;
}
interface IState{
    likes : number;
    dislikes: number;
    userVote: 'like' | 'dislike' | null; // Track the user's vote
}

let Counter:React.FC<IProps> = ({ post }) => {

    let [state , setState] = useState<IState>({
        likes : post.likes || 0,
        dislikes: post.dislikes || 0,
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
        let updatedPost = { ...post, likes: newLikes, dislikes: newDislikes };
        await updatePost(updatedPost);
        console.log('Updated post:', updatedPost);
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
        let updatedPost = { ...post, likes: newLikes, dislikes: newDislikes };
        await updatePost(updatedPost);
        console.log('Updated post:', updatedPost);
    };

    return(
        <React.Fragment>
            <h3>Zagłosuj czy bierzesz udział w wydarzeniu już dziś!</h3>
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
