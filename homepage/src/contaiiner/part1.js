import './part1.css';

function Part1() {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require('./bg1.png')} class="d-block w-100"></img>
                        <div class="carousel-caption ">
                            <h2>PROVIDING PATH BREAKING SOLUTION TO</h2>
                            <p>Industries For Making Them
                                Future Ready</p>
                            <button>Explore More</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require('./bg1.png')} class="d-block w-100" ></img>
                        <div class="carousel-caption">
                            <h2>PROVIDING PATH BREAKING SOLUTION TO</h2>
                            <p>Industries For Making Them
                                Future Ready</p>  <button>Explore More</button>
                        </div>
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Part1;