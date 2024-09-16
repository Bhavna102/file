import './part2.css';

function Part2() {
    return (
        <div>
            <div class="about">
                <div class="about-img"data-aos="fade-up">
                    <img src={require('./about.png')}></img>
                </div>
                <div class="about-text" data-aos="fade-up">
                    <div class="about-head">ABOUT</div>
                    <div class="about-info">Prism Group Of Comapny</div>
                    <div class="service">
                        <div class="service-about">
                            <div class="service-img">
                                <img src={require('./service.png')}></img>
                            </div>
                            <div class="service-text">
                                Services
                            </div>
                        </div>
                        <div class="service-about">
                            <div class="service-img">
                                <img src={require('./service.png')}></img>
                            </div>
                            <div class="service-text">
                                Services
                            </div>
                        </div>
                        <div class="service-about">
                            <div class="service-img">
                                <img src={require('./service.png')}></img>
                            </div>
                            <div class="service-text">
                                Services
                            </div>
                        </div>
                    </div>
                    <div class="experience" >
                        <div class="prism-text"><h2>Prism Eco System For Indurties...since 2004</h2></div>
                        <div class="prism-text">When the highest precisos of the test results, measuring instrumnets and collabaration service from prism company caliibration center is the first choice.</div>
                    </div>
                    <div class="content">
                        <div class="content-box"><h1>17+</h1>Year Of Experience</div>
                        <div class="content-item">
                            <div class="item"><i class="fa-solid fa-check"></i>collabaration</div>
                            <div class="item"><i class="fa-solid fa-check"></i>collabaration</div>
                            <div class="item"><i class="fa-solid fa-check"></i>collabaration</div>
                            <div class="item"><i class="fa-solid fa-check"></i>collabaration</div>
                            <div class="item"><i class="fa-solid fa-check"></i>collabaration</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Part2;