import Banner from "../assets/Hero.jpg"
import four from "../assets/IMG-20240126-WA0003.jpg"
import one from "../assets/intentive.jpg"
import two from "../assets/IMG-20231125-WA0268.jpg"
import three from "../assets/7G1A8294007.jpg"

import { Carousel } from 'flowbite-react';

function hero(){
    return (
        <div id="Home" className=" h-72 lg:h-[400px] mt-5 scroll-mt-[90px]">
       
            <Carousel leftControl="left" rightControl="right" slideInterval={3000}>
            <img className="h-72 lg:h-[560px]" src={Banner} alt="..." />
            <img className="h-72 lg:h-[560px]" src={four} alt="..." />
            {/* <img src={one} alt="..." /> */}
            <img src={two} alt="..." />
            <img src={three} alt="..." />
            </Carousel>
       </div>
       

    )
}
export default hero