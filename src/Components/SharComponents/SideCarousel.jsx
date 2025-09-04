import React from 'react'
import CarousedCard from './CarouselCard'

const SideCarousel = () => {
    return (
        <div>
            <div className=" carousel  p-4">
                <div className="carousel-item">
                    <CarousedCard />

                </div>
                <div className="carousel-item">
                    <CarousedCard />
                </div>
                <div className="carousel-item">
                    <CarousedCard />
                </div>
                <div className="carousel-item">
                    <CarousedCard />
                </div>
              
            </div>
        </div>
    )
}

export default SideCarousel