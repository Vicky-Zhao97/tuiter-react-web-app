import React from "react";
import {useSelector} from "react-redux";
import TuitItem from './TuitItem'
import './index.css'

const TuitsList = () => {
    const tuitsArray = useSelector(
        (state) => state.tuits);
    return(
        <div className="list-group">
            {
                tuitsArray.map(tuits =>
                                   <TuitItem
                                       key={tuits.id} tuit={tuits}/>)
            }
        </div>
    );
};
export default TuitsList;
/*
import React from "react";
import TuitItem
    from "./TuitItem";
import {useSelector} from "react-redux";
const TuitsList = () => {
    const whoArray = useSelector(
        (state) => state.tuit);
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Who to follow</h3>
            </li>
            {
                whoArray.map(who =>
                                 <WhoToFollowListItem
                                     key={who.id}
                                     who={who}/>
                )
            }
        </ul>
    );
};
export default TuitsList;*/
