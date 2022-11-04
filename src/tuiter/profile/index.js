import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
const ProfileComponent = () => {
    const myself = useSelector(state => state.profile);
    return(
        <>
            <div className="g-col-2">
                <i className="bi bi-arrow-left-short text-dark fs-2 ms-3 float-start"></i>
            </div>
            <div className="g-col-10">
                <div className="row">
                    <span className="float-start fs-4 ms-3 fw-bolder">{myself.firstName} {myself.lastName}</span>
                </div>
                <div className="row">
                    <span className="float-start ms-3 text-secondary">6,100 Tuits</span>
                </div>
            </div>
            <img className="w-100" src={`/images/${myself.bannerPicture}`} alt="banner"/>
            <img className="rounded-circle w-25 float-left ms-2 position-relative translate-middle-y"
                 src={`/images/${myself.profilePicture}`} alt="profile"/>
            <Link to="/tuiter/edit-profile">
                <button className="btn border-secondary rounded-pill float-end me-3 mt-3 fw-bold">
                    Edit profile</button>
            </Link>

            <div className="ms-3 me-4">
                <div className="row">
                    <span className="float-start fs-4 fw-bolder">{myself.firstName} {myself.lastName}</span>
                </div>
                <div className="row">
                    <span className="float-start text-secondary">@{myself.handle}</span>
                </div>
                <div className="row">
                    <p className="float-start mt-2">{myself.bio}</p>
                </div>
            </div>

            <div className="row ms-1 me-4">
                <div className="col-4">
                    <i className="bi bi-geo-alt text-secondary"></i>
                    <span className="text-secondary">{myself.location}</span>
                </div>
                <div className="col-5">
                    <i className="bi bi-balloon text-secondary"></i>
                    <span className="text-secondary">Born {myself.dateOfBirth}</span>
                </div>
                <div className="col-3">
                    <i className="bi-calendar3 text-secondary"></i>
                    <span className="text-secondary"> {myself.dateJoined}</span>
                </div>
            </div>

            <div className="row ms-1 me-4">
                <div className="col-4">
                    <span className="fw-bolder">{myself.followingCount}</span>
                    <span className="text-secondary"> Following</span>
                </div>
                <div className="col-4">
                    <span className="fw-bolder">{myself.followersCount}</span>
                    <span className="text-secondary"> Follower</span>
                </div>
            </div>
        </>
    );
};
export default ProfileComponent;