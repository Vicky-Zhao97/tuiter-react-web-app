import { createSlice } from "@reduxjs/toolkit";

const profile = {
    "firstName": "Wei",
    "lastName": "Zhao",
    "handle": "weizhao",
    "profilePicture": "luhan.jpg",
    "bannerPicture": "luhan5.jpg",
    "bio": "Wei, a kind girl, has lots of hobbies, such as following pop singers, making handcrafts, and baking. She wants to make more friends in US.",
    "website": "youtube.com/webdevtv",
    "location": "Boston, MA",
    "dateOfBirth": "8/27/1997",
    "dateJoined": "4/2009",
    "followingCount": 340,
    "followersCount": 223
}
const profileSlice = createSlice({
                                 name: "profile",
                                 initialState: profile,
                                 reducers: {
                                     editProfile(state, action) {
                                         state.firstName = action.payload.firstName
                                         state.lastName = action.payload.lastName
                                         state.handle = action.payload.handle
                                         state.bio = action.payload.bio
                                         state.website = action.payload.website
                                         state.location = action.payload.location
                                         state.dateOfBirth = action.payload.dateOfBirth
                                     }
                                 }
                             });

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;
