import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {editProfile} from "../profile/profile-reducer";

const EditProfile = () => {
    const myself = useSelector(state => state.profile);
    const [profile, setProfile] = useState({
                                               firstName: myself.firstName,
                                               lastName: myself.lastName,
                                               handle: myself.handle,
                                               bio: myself.bio,
                                               website: myself.website,
                                               location: myself.location,
                                               dateOfBirth: myself.dateOfBirth
        });
    const dispatch = useDispatch();
    const saveProfileClickHandler = () => {
        dispatch(editProfile(profile));
    }
    const firstNameChangeHandler = (event) => {
        const newFirstName = {...profile,
            firstName: event.target.value, handle: + event.target.value.toLowerCase() + profile.lastName.toLowerCase()};
        setProfile(newFirstName);
    }
    const lastNameChangeHandler = (event) => {
        const newLastName = {...profile,
            lastName: event.target.value, handle: profile.firstName.toLowerCase() + event.target.value.toLowerCase()};
        setProfile(newLastName);
    }
    const bioChangeHandler = (event) => {
        const newBio = {...profile,
            bio: event.target.value};
        setProfile(newBio);
    }
    const locationChangeHandler = (event) => {
        const newLocation = {...profile,
            location: event.target.value};
        setProfile(newLocation);
    }
    const websiteChangeHandler = (event) => {
        const newWebsite = {...profile,
            website: event.target.value};
        setProfile(newWebsite);
    }
    const birthChangeHandler = (event) => {
        const newBirth = {...profile,
            dateOfBirth: event.target.value};
        setProfile(newBirth);
    }
    return (
        <>
            <div className="row align-middle">
                <div className="col-1">
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg text-dark fs-2 ms-2 float-start"></i>
                    </Link>
                </div>
                <div className="col-7">
                    <span className="fw-bolder fs-3 mt-1 float-start">Edit profile</span>
                </div>
                <div className="col-3">
                    <Link to="/tuiter/profile">
                        <button className="btn btn-dark rounded-pill float-end mt-1"
                                onClick={saveProfileClickHandler}>Save</button>
                    </Link>
                </div>
            </div>
            <img className="w-100" src={`/images/${myself.bannerPicture}`} alt="banner"/>
            <img className="rounded-circle w-25 float-left ms-2 position-relative translate-middle-y"
                 src={`/images/${myself.profilePicture}`} alt="profile"/>
            <div className="mb-3">
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="firstNameInput" className="form-label">First Name</label>
                        <textarea className="form-control" id="firstNameInput" onChange={firstNameChangeHandler}>
                            {myself.firstName}
                        </textarea>
                    </div>
                    <div className="col-6">
                        <label htmlFor="lastNameInput" className="form-label">Last Name</label>
                        <textarea className="form-control" id="lastNameInput" onChange={lastNameChangeHandler}>
                            {myself.lastName}
                        </textarea>
                    </div>
                </div>
                <div className="mt-3">
                    <label htmlFor="bioInput" className="form-label">Bio</label>
                    <textarea className="form-control" id="bioInput" onChange={bioChangeHandler}>
                            {myself.bio}
                    </textarea>
                </div>
                <div className="mt-3">
                    <label htmlFor="locationInput" className="form-label">Location</label>
                    <textarea className="form-control" id="locationInput" onChange={locationChangeHandler}>
                            {myself.location}
                    </textarea>
                </div>
                <div className="mt-3">
                    <label htmlFor="websiteInput" className="form-label">Location</label>
                    <textarea className="form-control" id="websiteInput" onChange={websiteChangeHandler}>
                            {myself.website}
                    </textarea>
                </div>
                <div className="mt-3">
                    <label htmlFor="birthInput" className="form-label">Date of Birth</label>
                    <textarea className="form-control" id="birthInput" onChange={birthChangeHandler}>
                            {myself.dateOfBirth}
                    </textarea>
                </div>
            </div>
        </>

    );

};
export default EditProfile;