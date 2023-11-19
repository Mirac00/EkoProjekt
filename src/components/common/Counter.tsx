import React, { useState } from "react";
import { updatePost } from '../../services/postsService';
import { Post } from '../../models/Post';

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
            <h3>Zagłsuj czy bierzesz udział w wydarzeniu już dziś!</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3 display-3">Likes: {state.likes}</p>
                                <button className="btn btn-success m-1" onClick={incr}>increment</button>
                                <p className="h3 display-3">Dislikes: {state.dislikes}</p>
                                <button className="btn btn-danger" onClick={dincr}>dncrement</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Counter;
