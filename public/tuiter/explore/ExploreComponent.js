import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row align-items-center">
            <!-- search field and cog -->
                <div class="col-10">
                    <i class="fas fa-search position-absolute m-2 p-1"></i>
                    <input class="form-control rounded-pill ps-5"  placeholder="Search Tuiter">
                </div>
                <div class="col-2">
                    <a href="explore-setting.html">
                    <i class="fas fa-cog fa-2x float-end"></i>
                    </a>
                </div>
           </div>
           <ul class="nav nav-tabs navbar-expand mt-2">
           <!-- tabs -->
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">COVID-19</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-sm-none d-md-block">
                    <a href="#" class="nav-link">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="mt-2 mb-2 position-relative">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1"
                     class="w-100" alt="SpaceX's Starship">
                <h1 class="text-black position-absolute bottom-0 m-2">SpaceX's Starship</h1>
           </div>
           ${PostSummaryList()}          
    `);
}
export default ExploreComponent;

