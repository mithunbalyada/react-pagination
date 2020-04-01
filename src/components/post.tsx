import React from 'react';
import { PostType } from './paginatedPosts';

interface PostProps{
    posts: PostType[];
    loading:boolean
}


export const Post: React.FC<PostProps> = ({posts, loading}) => {

    if(loading){
        return <div>Loding posts ..</div>
    }

    return (
      <React.Fragment>
        <ul className="list-group ">
          {posts.map(post => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
}