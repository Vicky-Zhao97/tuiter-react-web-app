import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./whos.js"
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           <!-- continue here -->
           <div class="list-group-item">
                <div class="text-white fw-bold h6 mt-2">Who to follow</div>
           </div>
           <div class="list-group-item">
           ${
               whos.map(who => {
                   return(WhoToFollowListItem(who));
               }).join('')
           }
           </div>
           </ul>
`);
}
export default WhoToFollowList;

