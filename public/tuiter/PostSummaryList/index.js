import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {
    return (`
           <ul class="list-group">
           <!-- continue here -->
           <div class="list-group-item">
           ${
        posts.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }
           </div>
           </ul>
`);
}
export default PostSummaryList;