import React from "react";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./TuitStats";

const TuitsItem = ({tuit}) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        //dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    }
    return(
        <div className="row border rounded">
            <div className="col-1 wd-avatar mt-2">
                <img src={`/images/${tuit.image}`} className="rounded-circle" alt={"avatar"}/>
            </div>
            <div className="col-11 mt-2">
                <div className="row">
                    <div className="col-11">
                        <span className="fw-bold">{tuit.userName}
                            <i className="bi bi-patch-check-fill text-primary ps-1"></i>
                        </span>
                        <span className="text-secondary ps-1">{tuit.handle} - {tuit.time}
                        </span>
                    </div>
                    <div className="col-1">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                </div>
                <div className="row text-secondary ps-1 me-3">
                    <p>{tuit.tuit}</p>
                </div>
                <TuitStats key={tuit._id} tuit={tuit}/>
            </div>
        </div>
    );
};
export default TuitsItem;
/*
import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
//import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./TuitStats";
const TuitItem = (
    {
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
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        //dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    }
    return(
        <div className="row border rounded">
            <div className="col-1 wd-avatar mt-2">
                <img src={`/images/${tuit.image}`} className="rounded-circle" alt={"avatar"}/>
            </div>
            <div className="col-11 mt-2">
                <div className="row">
                    <div className="col-11">
                        <span className="fw-bold">{tuit.userName}
                            <i className="bi bi-patch-check-fill text-primary ps-1"></i>
                        </span>
                        <span className="text-secondary ps-1">{tuit.handle} - {tuit.time}
                        </span>
                    </div>
                    <div className="col-1">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit.id)}></i>
                    </div>
                </div>
                <div className="row text-secondary me-3">
                    <p>{tuit.tuit}</p>
                </div>
                <TuitStats key={tuit.id} tuit={tuit}/>
            </div>
        </div>
    );
};
export default TuitItem;
*/
