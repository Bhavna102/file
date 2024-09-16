import './header.css';

function Header() {
    return (
        <div>
            <div class="header">
                <div class="icons">
                    FOLLOW US: <i class="fa-brands fa-instagram"></i><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-linkedin"></i><i class="fa-brands fa-pinterest"></i><i class="fa-brands fa-twitter"></i>
                </div>

                <div class="call">
                    <i class="fa-solid fa-phone"></i>CAll US: +91-9879686868
                </div>
            </div>
            <div class="header1">
                <div class="header-img">
                    <div class="prism-img"> <img src={require('./icon1.png')}></img></div>
                </div>
                <div class="menu">
                    <div class="home">Home</div>
                    <div class="home">about us</div>
                  
                    <div class="drop-down">
                        <div class="home">Companies<i class="fa-solid fa-angle-down"></i>   
                        </div>
                        <div class="drop-down-list">
                            <div class="drop1">
                                <li>Our Story</li>
                            </div>
                            <div class="drop2">
                                <li>Our Team</li>
                            </div>
                            <div class="drop3">
                                <li>Testimonial</li>
                            </div>
                        </div>
                    </div>
                    <div class="drop-down">
                        <div class="home">business
                            <i class="fa-solid fa-angle-down"></i>
                        </div>
                        <div class="drop-down-list">
                            <div class="drop1">
                                <li>Our Story</li>
                            </div>
                            <div class="drop2">
                                <li>Our Team</li>
                            </div>
                            <div class="drop3">
                                <li>Testimonial</li>
                            </div>
                        </div>
                    </div>
                
                    <div class="home">gallery</div>
                    <div class="home">awards</div>
                    <div class="home">carrier</div>
                    <div class="home">blogs</div>
                    <div class="home">Franchisee</div>
                    <div class="home">Industrial Pathshala</div>
                    <button>Contact Us</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
