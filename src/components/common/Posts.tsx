import React, { useEffect, useState } from 'react';
import { getPosts } from '../../services/postsService';
import { Post } from '../../models/Post';
import Comments from './Comments';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <h3>OOO123</h3>
      {posts.map(post => (
        <div key={post.id} className="card mb-3">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p className="card-text">{post.body}</p>
            <Comments postId={post.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;