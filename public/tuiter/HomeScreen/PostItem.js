const PostItem = (post) => {
    return(`
    <div class="row mb-4 mt-1">
          <div class="col-1 wd-avatar">
                <img src=${post.avatar} class="rounded-circle">
          </div>
          <div class="col-11">
                <div class="row ms-1">
                    <div class="col-11">
                        <span class="text-white fw-bold">${post.userName}
                            <i class="fas fa-check-circle fa-1x small"></i>
                        </span>
                        <span class="text-secondary">${post.handle} - ${post.time}
                        </span>
                    </div>
                    <div class="col-1">
                        <i class="fas fa-ellipsis-h fa-1x small float-end wd-more"></i>
                    </div>
                </div>
                <div class="row ms-1">
                    <p>${post.topic}</p>
                </div>
                <div class="row ms-1">
                    <div>
                        ${post.title ? `<img src=${post.image} class=" border wd-border border-2 rounded-top w-100">` : `<img src=${post.image} class=" border wd-border border-2 rounded w-100">`}
                        ${post.title ? `<div class="fw-bold text-white border wd-border border-bottom-0 ps-3 pe-3"> ${post.title}</div>` :""}
                        ${post.content ? `<div class="text-secondary border wd-border border-top-0 rounded-bottom ps-3 pb-2 pe-3"> ${post.content}</div>`:""}
                    </div>  
                </div>
                <div class="row mt-2 ms-1">
                    <div class="col-1">
                        <span class="text-secondary"><i class="fa-regular fa-comment"></i></span>
                    </div>
                    <div class="col-2">
                        <span class="text-secondary">${post.comment}</span>
                    </div>
                    <div class="col-1">
                        <span class="text-secondary"><i class="fas fa-retweet"></i></span>
                    </div>
                    <div class="col-2">
                    <span class="text-secondary">${post.retweet}</span>
                    </div>
                    <div class="col-1">
                        <span class="text-secondary"><i class="fa-regular fa-heart"></i></span>
                    </div>
                    <div class="col-2">
                    <span class="text-secondary">${post.heart}</span>
                    </div>
                    <div class="col-3">
                        <span class="text-secondary"><i class="fas fa-arrow-up-from-bracket"></i></span>
                    </div> 
                </div>           
          </div>  
     </div>
<hr>`

    );
}
export default PostItem