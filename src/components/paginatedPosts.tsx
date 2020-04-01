import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {Post} from './post';
import {Pagination} from './pagination';


export type PostType = {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
interface PaginatePostsProps{
    noOfPostsPerPage:number;
}


export const PaginatedPosts: React.FC<PaginatePostsProps> = ({noOfPostsPerPage}) => {
    
    const[posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () =>  {
            setLoading(true);
            const respone = Axios.get<PostType[]>('https://jsonplaceholder.typicode.com/posts');
            const {data} =  (await respone);
            setPosts(data);
            setLoading(false);
        }
        fetchData();
    }, [] );

    const lastPostIndex = currentPage * noOfPostsPerPage;
    const firstPostIndex = lastPostIndex - noOfPostsPerPage;
    const currentPost = posts.slice(firstPostIndex, lastPostIndex);

    const paginate = (index:number) => setCurrentPage(index);

    return(
        <React.Fragment>
            <Post posts={currentPost} loading={loading}/>
            <Pagination
             totalPosts={posts.length}
             postsPerPage={noOfPostsPerPage}
             paginate={paginate}
             />
        </React.Fragment>
    );
}