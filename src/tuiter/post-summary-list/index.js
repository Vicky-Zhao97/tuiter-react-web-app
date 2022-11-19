import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostSummaryItem from "./post-summary-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {tuits.map(tuit => <PostSummaryItem tuit={tuit}/> )}
        </ul>
    );
};
export default PostSummaryList;

/*import React from "react";
import PostSummaryItem
    from "./post-summary-item";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)

    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                                   <PostSummaryItem
                                       key={post.id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;*/
/*
import React from "react";
import postsArray from './posts.json';
import PostSummaryItem
    from "./post-summary-item";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                                   <PostSummaryItem
                                       key={post.id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;
*/


