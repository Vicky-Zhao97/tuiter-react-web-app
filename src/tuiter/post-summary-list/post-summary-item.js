import React from "react";
const PostSummaryItem = ({tuit}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{tuit.username} . {tuit.time}</div>
                    <div className="fw-bolder">{tuit.title}</div>
                    <div>{tuit.tuit}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`} alt={"post img"}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;


/*
import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "Telsa.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{post.userName} . {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`} alt={"post-summary"}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;

*/
