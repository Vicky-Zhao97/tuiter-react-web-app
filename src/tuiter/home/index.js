import React from "react";
import TuitsList from "../tuits";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;
/*
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
export default HomeComponent;*/
