import React, { SyntheticEvent } from 'react';



interface PaginationProps{
  totalPosts: number;
  postsPerPage: number;
  paginate: (idx: number) => void;
}

export const Pagination: React.FC<PaginationProps>  = ({totalPosts, postsPerPage, paginate}) =>{

  const pagenumbers:number[] = [];

  for(let i=1; i<=Math.abs(totalPosts/postsPerPage); i++)
    pagenumbers.push(i);

  const handleClick = (e: SyntheticEvent, num: number) =>{
    e.preventDefault();
    paginate(num);
  }

    return (
      <React.Fragment>
        <nav aria-label="Page navigation example mt-12">
          <ul className="pagination mt-12">
           {pagenumbers.map(num => (
                <li className="page-item" key={num}>
                    <a className="page-link" href="/#" onClick={(e:SyntheticEvent) => handleClick(e, num)}>{num}</a>
                </li>
           ))}
          </ul>
        </nav>
      </React.Fragment>
    );
}