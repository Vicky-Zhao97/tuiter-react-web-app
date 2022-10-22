import React from "react";
import "./index.css";
const PostItem = (
    {
        post = {
            "avatar": "luhan.jpg",
            "userName": "Elon Musk",
            "handle" : "@elonmusk",
            "time": "23h",
            "topic": "Lorem ipsum dolor sit amet",
            "image": "luhan5.jpg",
            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non tortor ut risus dignissim pharetra. Curabitur a diam molestie, blandit nisl elementum, commodo tortor...",
            "comment": "4.2k",
            "retweet": "3.5k",
            "heart":"37.5k",

        }
    }
) => {
    return(
        <div className="row mb-4 mt-1">
            <div className="col-1 wd-avatar">
                <img src={post.avatar} className="rounded-circle"/>
            </div>
            <div className="col-11">
                <div className="row ms-1">
                    <div className="col-11">
                        <span className="fw-bold">{post.userName}
                            <i className="bi bi-patch-check-fill text-primary ps-1"></i>
                        </span>
                        <span className="text-secondary ps-1">{post.handle} - {post.time}
                        </span>
                    </div>
                    <div className="col-1">
                        <i className="bi bi-three-dots wd-more"></i>
                    </div>
                </div>
                <div className="row ms-1">
                    <p>{post.topic}</p>
                </div>
                <div className="row ms-1">
                    <div>
                        {post.title
                          ? <img src={post.image} class=" wd-border border rounded-top w-100"/>
                          : <img src={post.image} class="wd-border border rounded w-100"/>}
                        {post.title
                          ? <div class="fw-bold border wd-border border-bottom-0 ps-3 pe-3"> {post.title}</div>
                          : ""}
                        {post.content
                          ? <div class="text-secondary border wd-border border-top-0 rounded-bottom ps-3 pb-2 pe-3"> {post.content}</div>
                          : ""}
                    </div>
                </div>
                <div className="row mt-2 ms-1">
                    <div className="col-1">
                        <span className="text-secondary">
                            <i className="bi bi-chat"></i></span>
                    </div>
                    <div className="col-2">
                        <span className="text-secondary small">{post.comment}</span>
                    </div>
                    <div className="col-1">
                        <span className="text-secondary"><i className="bi bi-repeat"></i></span>
                    </div>
                    <div className="col-2">
                        <span className="text-secondary small">{post.retweet}</span>
                    </div>
                    <div className="col-1">
                        <span className="text-secondary"><i
                            className="bi bi-heart"></i></span>
                    </div>
                    <div className="col-2">
                        <span className="text-secondary small">{post.heart}</span>
                    </div>
                    <div className="col-3">
                        <span className="text-secondary"><i
                            className="bi bi-upload"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PostItem;
