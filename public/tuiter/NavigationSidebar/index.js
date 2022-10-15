const NavigationSidebar = (parameter) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
            <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${parameter == 'home'
                                                                                               ? 'active'
                                                                                               : ''}">
                    <i class="fas fa-home float-start me-1 mt-1"></i>
                    <span class="d-none d-xxl-block d-xl-block">Home</span>
            </a>
            <a href="../explore/index.html" class="list-group-item list-group-item-action ${parameter
                                                                                            == 'explore'
                                                                                            ? 'active'
                                                                                            : ''}">
                    <i class="fas fa-hashtag float-start me-1 mt-1"></i>
                    <span class="d-none d-xxl-block d-xl-block">Explore</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${parameter == 'notification'
                                                                        ? 'active' : ''}">
                    <i class="fas fa-bell float-start me-1 mt-1"></i>
                    <span class="d-none d-xxl-block d-xl-block">Notifications</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${parameter == 'message'
                                                                        ? 'active' : ''}">
                    <i class="fas fa-envelope float-start me-1 mt-1"></i>
                    <span class="d-none d-xxl-block d-xl-block">Messages</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${parameter == 'bookmark'
                                                                        ? 'active' : ''}">
                    <i class="fas fa-bookmark float-start me-1 mt-1"></i>
                    <span class="d-none d-xxl-block d-xl-block">Bookmarks</span>
                </a>
            <a href="#" class="list-group-item list-group-item-action ${parameter == 'list'
                                                                        ? 'active' : ''}">
                    <i class="fas fa-list-ul float-start me-1 mt-1"></i>
                    <span class="d-none d-xxl-block d-xl-block">List</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${parameter == 'profile'
                                                                        ? 'active' : ''}">
                    <i class="fas fa-user float-start me-1 mt-1"></i>
                    <span class="d-none d-xxl-block d-xl-block">Profile</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${parameter == 'more'
                                                                        ? 'active' : ''}">
                    <i class="fas fa-ellipsis-h float-start me-1 mt-1"></i>
                    <span class="d-none d-xxl-block d-xl-block ">More</span>
            </a>                     
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

