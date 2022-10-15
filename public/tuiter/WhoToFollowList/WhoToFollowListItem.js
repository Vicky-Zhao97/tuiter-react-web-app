const WhoToFollowListItem = (who) => {
    return(`
    <div class="row py-2">
        <div class="col-2 ">
            <img src=${who.avatarIcon} class="rounded-circle mt-1" style="width: 40px; height: 40px"></div>
        <div class="col-8">
            <span class="text-white fw-bold">${who.userName}
                   <i class="fas fa-check-circle"></i>
            </span>
            <div class="text-white">@${who.handle}</div>
        </div>
        <div class="col-2 mt-1"> 
             <button type="button" class="btn btn-primary btn-block rounded-pill float-end">Follow</button>
        </div>
    </div>`
    );
}
export default WhoToFollowListItem