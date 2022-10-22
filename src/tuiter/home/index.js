import React from "react";
import postsArray from './posts.json';
import PostItem
    from "./PostItem";
const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                                   <PostItem
                                       key={post.id} post={post}/> )
            }
        </ul>
    );
};
export default HomeComponent;