import React from 'react'
import { Carousel } from "@material-tailwind/react";
import banner from '../assets/images/homebanner.png'
import banner2 from '../assets/images/banner2.png'
import banner3 from '../assets/images/banner3.png'
import banner4 from '../assets/images/banner4.jpg'

const Carouselslider = () => {
    return (
        <Carousel
            transition={{ type: "spring", duration: 2 }}
            className="mt-8"
            autoplay
            loop
            autoplayDelay={5000}
        >
            {/* item 1 */}
            <div className="banner" style={{ backgroundImage: `url(${banner})` }} >
                <div className="banner_center">
                    <h1>Driving sustainable investments and creating value</h1>
                    <p>Kaxal Africa Limited is a member of the Pan African Capital Holdings group, committed to significantly
                        impacting the African continent's agribusiness and consumer goods distribution sectors.</p>
                </div>

            </div>
            {/* item 2 */}
            <div className="banner" style={{ backgroundImage: `url(${banner2})` }} >
                <div className="banner_center">
                    <h1>Leveraging market knowledge and technology to drive value</h1>
                    <p> As a parent company, we oversee two subsidiaries, each vital in our mission to drive sustainable investments and
                        create value for our stakeholders.</p>
                </div>
            </div>
            {/* item 3 */}
            <div className="banner" style={{ backgroundImage: `url(${banner3})` }} >
                <div className="banner_center">
                    <h1>Making sustainable investments across the African
                        continent</h1>
                    <p>We leverage advanced technologies to streamline processes and enhance efficiency.
                        From precision agriculture in Webzen Agro Allied Services to state-of-the-art
                        e-commerce platforms in Hawaree Africa Limited.</p>
                </div>
            </div>
            {/* item 4 */}
            <div className="banner" style={{ backgroundImage: `url(${banner4})` }} >
                <div className="banner_center">
                    <h1>Dedicated to providing consumer goods with a
                        customer-centric focus</h1>
                    <p>Our e-commerce services are driven by personalised
                        experiences, intuitive interfaces, and a commitment to delivering products swiftly and
                        securely to the doorsteps of our valued customers</p>
                </div>
            </div>
        </Carousel>
    )
}

export default Carouselslider