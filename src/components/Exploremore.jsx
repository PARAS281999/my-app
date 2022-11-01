import React from 'react'
import { GrStatusWarning } from "react-icons/gr";

function Exploremore() {
    return (
        <>
            <div className='explore-backgroud'><div className='explore-heading'>
                <h1>Explore More</h1>
            </div><div className='flexbox-containermore'>
                    <div className='explore-section'>
                        <img src='https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/elantra/learn-more/pc/Hyundai-Explore-More-Engine-and-performance-PC-512-340.jpg' alt='#'></img>
                        <h3>Know More Engines</h3>
                    </div>
                    <div className='explore-section'>
                        <img src='https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/elantra/learn-more/pc/Clicktobuy.jpg' alt='#'></img>
                        <h3>Click To Buy</h3>
                    </div>
                    <div className='explore-section'>
                        <img src='https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/elantra/learn-more/specialofferpc.jpg' alt='#'></img>
                        <h3>Special Offer</h3>
                    </div>
                    <div className='explore-section'>
                        <img src='https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Creta1/Learn%20More/pc/LM%20-%20PC%20-%20512%20x%20340%20-%20Find%20a%20Dealer.jpg' alt='#'></img>
                        <h3>Find A Dealer</h3>
                    </div>
                </div>
                <div className='flexbox-explorewarning'>
                    <div className='explore-warningicon'>
                    <GrStatusWarning />
                    </div>
                    <div className='explore-warningtext'>
                    <p>The specification above are subject to change. Images shown above may vary from actual product. Some of the equipments illustrated or described above may not be supplied as standard equipment and may be available at extra cost.  Hyundai Motor India reserves the right to change specification & equipments of any product without prior notice. Please consult your nearby dealer for full information and availability on colours and trim.</p>
                    </div>
                </div>
            </div></>
    )
}

export default Exploremore;