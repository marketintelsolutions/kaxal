import React from 'react'
import { Link } from 'react-router-dom'
import Service from '../components/Service'
import { hawareeServices, webzenServices } from '../utils/data/services'
import services from '../assets/images/services.png'

const Services = () => {

    return (
        <div className='services'>
            <div className="section-one" style={{ backgroundImage: `url(${services})` }}>
                <div className="section-center">
                    <h2>Services</h2>
                    <div className="link">
                        <Link to="/">home</Link>
                        <p> {" > services"}</p>
                    </div>
                </div>
            </div>

            <div className="section-two">
                <div className='section-center'>
                    <h3>- Services -</h3>
                    <h2>In actualization of our vision, we have invested in 2 companies operating in the agribusiness and consumer goods distribution space.</h2>
                    <div className="webzen">
                        <h1>Webzen Agro Allied Services Limited</h1>
                        <p> Webzen is focused on providing financial investments and business support to the agribusiness sector.</p>
                        <div className="zen-items">
                            {
                                webzenServices.map((service, index) => {

                                    return <Service {...service} key={index} />
                                })
                            }

                        </div>
                    </div>
                    <Link to='/contact' className='learn-more'>Learn more</Link>

                    <div className="webzen hawaree">
                        <h1>Hawaree Africa</h1>
                        <p>Hawaree.com is an e-commerce platform growing organically into a full-fledged marketplace for the distribution of consumer goods in Africa.</p>
                        <div className="zen-items">
                            {
                                hawareeServices.map((service, index) => {

                                    return <Service {...service} key={index} />
                                })
                            }

                        </div>
                    </div>
                    <Link to='/contact' className='learn-more hawaree-btn'>Learn more</Link>

                </div>
            </div>
        </div>
    )
}

export default Services