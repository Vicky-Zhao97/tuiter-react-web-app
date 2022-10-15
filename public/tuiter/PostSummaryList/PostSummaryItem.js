const PostSummaryItem = (post) => {
    return(`
    <div class="row m-0">
          <div class="col-10">
                <div class="text-secondary ">${post.topic}</div>
                <span class="text-white fw-bold">${post.userName}
                    <i class="fas fa-check-circle fa-1x small"></i>
                </span>
                <span class="text-secondary">- ${post.time}</span>
                <p class="text-white fw-bold me-4">
                    ${post.title}
                </p>
          </div>
          <div class="col-2 wd-post-image pb-2">
                <img src=${post.image} class="float-end rounded-3 mt-3">
          </div>
          
     </div>`
    );
}
export default PostSummaryItem