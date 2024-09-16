import './part4.css';

function Part4() {
    return (
        <div>
            <div class="project">
                <div class="project-head">OUR SERVICES  </div>
                <div class="project-info">We Provide Best Industrial Services</div>
                <div class="grid" data-aos="fade-up">
                    <div class="grid-box">
                        <div class="grid-img"><img src={require('./sq1.png')}></img></div>
                        <div class="grid-text">Various Process Control Calibration</div>
                        <div class="text">Environmental Projects</div>
                        <div class="tex">Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</div>
                        <div class="grid-button"><button>Read More</button></div>
                    </div>
                    <div class="grid-box">
                        <div class="grid-img"><img src={require('./sq2.png')}></img></div>

                        <div class="grid-text">Hospitals Engineering Solution</div>
                        <div class="text">Environmental Projects</div>
                        <div class="tex">Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</div>
                        <div class="grid-button"><button>Read More</button></div>
                    </div>
                    <div class="grid-box">
                        <div class="grid-img"><img src={require('./sq5.png')}></img></div>
                        <div class="grid-text">Engineering Calibration</div>
                        <div class="text">Environmental Projects</div>
                        <div class="tex">Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</div>
                        <div class="grid-button"><button>Read More</button></div>
                    </div>
                    <div class="grid-box">
                        <div class="grid-img"><img src={require('./sq4.png')}></img></div>
                        <div class="grid-text">Air Monitoring Engineering Solution</div>
                        <div class="text">Environmental Projects</div>
                        <div class="tex">Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</div>
                        <div class="grid-button"><button>Read More</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Part4;
