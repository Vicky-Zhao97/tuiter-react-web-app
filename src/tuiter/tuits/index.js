import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import './index.css'
import {findTuitsThunk}
    from "../../services/tuits-thunks";
import TuitItem from "./TuitItem";

const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {tuits.map(tuit => <TuitItem tuit={tuit}/> )}
        </ul>
    );
};
export default TuitsList;


/*import React from "react";
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
export default TuitsList;*/
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
