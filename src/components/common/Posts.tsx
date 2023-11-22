import React, { useEffect, useState } from 'react';
import { getPosts } from '../../services/postsService';
import { Post } from '../../models/Post';
import UsersActivist from './UsersActivist';
import Comments from './Comments';
import Counter from './Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/postStyle.css';
import AddComment from './AddComment';

const Posts: React.FC = () => {
  let [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    let fetchPosts = async () => {
      let posts = await getPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container">
      {posts.map(post => (
        <div key={post.id} className="card mb-3 custom-shadow p-3 mb-5 bg-white rounded">
          <div className="card-body bg-">
            <UsersActivist userId={post.userId} />
            <h2 className="card-title">{post.title}</h2>
            <p className="card-text">{post.body}</p>
            <Counter post={post} />
            <AddComment postId={0}/>
            <Comments postId={post.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
