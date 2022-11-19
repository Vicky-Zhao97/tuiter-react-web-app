import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";
import "./index.css";

const TuitsStats = ({tuit}) => {
    const dispatch = useDispatch();
    return(
        <div className="row mt-1 mb-2">
            <div className="col-2">
                <div className="col-4 text-secondary">
                    <i className="bi bi-chat float-start"></i>
                </div>
                <div className="col-8 ps-4 me-0 text-secondary small">{tuit.replies}</div>
            </div>
            <div className="col-2">
                <div className="col-4 text-secondary">
                    <i className="bi bi-repeat float-start"></i>
                </div>
                <div className=" col-8 ps-4 me-0 text-secondary small">{tuit.retuits}</div>
            </div>
            <div className="col-2">
                <div className="col-4 text-secondary">
                    <i onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1, liked: true}))}
                        className={ tuit.liked?
                        "bi bi-heart-fill text-danger float-start" :
                                    "bi bi-heart-fill text-secondary float-start"}></i>
                </div>
                <div className=" col-8 ps-4 me-0 text-secondary small">{tuit.likes}</div>
            </div>
            <div className="col-2">
                <i onClick={() => dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1, disliked: true}))}
                   className={tuit.disliked?
                              "bi bi-hand-thumbs-down-fill text-danger float-start" :
                              "bi bi-hand-thumbs-down-fill text-secondary float-start"}></i>
                <div className=" col-8 ps-4 me-0 text-secondary small">{tuit.dislikes}</div>
            </div>
            <div className="col-2">
                <i className="bi bi-share text-secondary"></i>
            </div>
        </div>
    );
};
export default TuitsStats;


/*
import React from "react";
import "./index.css";
const TuitStats = ({
    tuit = {
        "id": 123,
        "topic": "JavaScript",
        "userName": "JavaScript",
        "time": "1 day",
        "title": "JavaScript is programming language that can run on browsers as well as desktops",
        "image": "JavaScript.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@javascript",
        "tuit": "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[10] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)."
    }
})=> {
    return (
        <div className="row mt-1 mb-2">
        <div className="col-3">
            <div className="col-4 text-secondary">
                <i className="bi bi-chat float-start"></i>
            </div>
            <div className="col-8 ps-4 text-secondary small">{tuit.replies}</div>
        </div>
        <div className="col-3">
            <div className="col-4 text-secondary">
                <i className="bi bi-repeat float-start"></i>
            </div>
            <div className=" col-8 ps-4 text-secondary small">{tuit.retuits}</div>
        </div>
        <div className="col-3">
            <div className="col-4 text-secondary">
                {tuit.liked ? <i className="bi bi-heart-fill wd-like-color float-start"></i> :
                 <i className="bi bi-heart float-start"></i>}
            </div>
            <div className=" col-8 ps-4 text-secondary small">{tuit.likes}</div>
        </div>
        <div className="col-3">
            <i className="bi bi-upload float-start"></i>
        </div>
    </div>);
};
export default TuitStats;

*/
